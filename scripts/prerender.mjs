/**
 * prerender.mjs — remplace l'ancien script de génération des pages.
 *
 *     npm run build && node prerender.mjs
 *
 * ──────────────────────────────────────────────────────────────────
 *  LE PROBLÈME QU'IL CORRIGE
 * ──────────────────────────────────────────────────────────────────
 *
 *  L'ancien script écrivait 17 fichiers qui ne différaient QUE par leur
 *  <head>. Le <body> de chacun était :
 *
 *      <body><div id="root"></div><script …></script></body>
 *
 *  Donc 17 URL servant exactement le même contenu. Google déduplique sur le
 *  CONTENU, et une balise canonique n'est qu'une indication : quand 17 pages
 *  sont identiques, Google les regroupe et choisit lui-même un représentant.
 *  D'où « Google n'a pas choisi la même URL canonique que l'utilisateur ».
 *
 *  Ce script charge chaque route dans un vrai Chromium, attend que React ait
 *  rendu, et écrit le HTML RENDU. Chaque fichier contient alors son propre
 *  texte. Les balises <script> sont conservées : React reprend la main au
 *  chargement, côté visiteur rien ne change.
 *
 *  Pourquoi Chromium plutôt que react-dom/server : aucune modification de
 *  l'application. Pas de routeur statique à câbler, pas de `window` à
 *  protéger, pas de refonte. Pour 17 pages d'information, c'est le bon
 *  compromis.
 *
 *  Prérequis :  npm i -D playwright  puis  npx playwright install chromium
 */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const SITE = 'https://vndach.com';
const DIST = path.resolve('dist');
const PORT = 4178;

/* ⚠ Ces chemins doivent correspondre EXACTEMENT à la forme canonique, barre
   oblique finale comprise, ET aux liens internes de l'application. Voir la
   section « liens internes » du patch : c'est ce décalage qui fait découvrir
   à Google des URL sans barre finale. */
const PAGES = [
  { path: '/', title: 'Vndach — Informations officielles', description: "Site d'information officiel de Vndach : conditions, confidentialité, règles de la communauté et guides." },
  { path: '/cgu', title: "Conditions générales d'utilisation — Vndach", description: "Les conditions générales d'utilisation de Vndach : droits et obligations des utilisateurs, achats, ventes et paiements." },
  { path: '/confidentialite', title: 'Politique de confidentialité — Vndach', description: 'Comment Vndach collecte, utilise et protège vos données personnelles.' },
  { path: '/bons-achat', title: "Bons d'achat — Vndach", description: "Tout savoir sur les bons d'achat Vndach : fonctionnement, utilisation et conditions." },
  { path: '/regles-communaute', title: 'Règles de la communauté — Vndach', description: 'Les règles de bonne conduite à respecter sur Vndach pour une communauté sûre et respectueuse.' },
  { path: '/guides', title: "Guides d'utilisation — Vndach", description: 'Tous les guides Vndach : acheter, vendre, créer du contenu, protéger sa vie privée et signaler un problème.' },
  { path: '/guides/acheter', title: 'Guide : acheter sur Vndach', description: 'Comment acheter en toute sécurité sur Vndach, étape par étape.' },
  { path: '/guides/vendre', title: 'Guide : vendre sur Vndach', description: 'Comment publier vos produits et vendre sur Vndach.' },
  { path: '/guides/creer', title: 'Guide : créer du contenu sur Vndach', description: 'Publier des posts, des stories et animer votre communauté sur Vndach.' },
  { path: '/guides/confidentialite', title: 'Guide : gérer sa confidentialité — Vndach', description: 'Les réglages pour contrôler qui voit vos informations sur Vndach.' },
  { path: '/guides/donnees-mobiles', title: 'Guide : économiser ses données mobiles — Vndach', description: 'Réduire la consommation de données mobiles dans Vndach.' },
  { path: '/guides/signaler', title: 'Guide : signaler un problème — Vndach', description: 'Comment signaler un contenu, un utilisateur ou un problème sur Vndach.' },
  { path: '/a-propos', title: 'À propos — Vndach', description: 'Découvrez Vndach, la super-app africaine qui réunit réseau social, marketplace et communauté.' },
  { path: '/autorites', title: 'Informations pour les autorités — Vndach', description: "Informations et procédure de contact pour les autorités souhaitant joindre Vndach." },
  { path: '/partenaires', title: 'Partenaires — Vndach', description: 'Les partenaires de Vndach et comment devenir partenaire.' },
  { path: '/mentions-legales', title: 'Mentions légales — Vndach', description: "Les mentions légales de Vndach : éditeur, hébergeur et contact." },
  { path: '/contact', title: 'Contact — Vndach', description: "Contactez l'équipe Vndach : support, questions et demandes." },
];

/** Texte minimum attendu dans #root pour considérer la page rendue. */
const MIN_TEXT = 200;

/* ------------------------------------------------------------------ */
/* Serveur statique local, avec repli SPA                              */
/* ------------------------------------------------------------------ */

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function startServer(root, port) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);

    // Jamais au-dessus de la racine, même si la requête contient ../
    const candidate = path.normalize(path.join(root, urlPath));
    if (!candidate.startsWith(root)) {
      res.writeHead(403).end();
      return;
    }

    let file = candidate;
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, 'index.html');
    }

    // Repli SPA : toute route inconnue sert la coquille, comme en production.
    if (!fs.existsSync(file)) {
      file = path.join(root, 'index.html');
    }

    const body = fs.readFileSync(file);
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': body.length,
    });
    res.end(body);
  });

  return new Promise((resolve, reject) => {
    server.on('error', reject);
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

/* ------------------------------------------------------------------ */
/* Balises de tête — posées par le DOM, pas par expression régulière   */
/* ------------------------------------------------------------------ */

/**
 * L'ancien script faisait .replace() sur des balises og:title et
 * og:description QUI N'EXISTENT PAS dans index.html. Un .replace() sans
 * correspondance renvoie la chaîne inchangée, sans erreur : aucune page n'avait
 * donc d'og:title ni d'og:description, et un partage sur WhatsApp ou Facebook
 * n'affichait que le nom du site.
 *
 * Ici on crée la balise si elle manque, on la met à jour sinon.
 */
function applyHead({ title, description, canonical }) {
  document.title = title;

  const setMeta = (attr, name, content) => {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonical);

  // Twitter lit og:* en repli, mais une grande carte se demande explicitement.
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', canonical);
}

/* ------------------------------------------------------------------ */

const canonicalFor = (p) => (p === '/' ? `${SITE}/` : `${SITE}${p}/`);

const outputFor = (p) =>
  p === '/' ? path.join(DIST, 'index.html') : path.join(DIST, p, 'index.html');

/** Le texte visible d'un fichier rendu, pour la détection de doublons. */
function visibleText(file) {
  const html = fs.readFileSync(file, 'utf8');
  return html
    .replace(/^[\s\S]*?<body[^>]*>/, '')
    .replace(/<\/body>[\s\S]*$/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error(`✖ ${path.join(DIST, 'index.html')} introuvable. Lancez « npm run build » d'abord.`);
    process.exit(1);
  }

  /* Garde-fou : si index.html référence encore /src/main.jsx, c'est le modèle
     source et non le résultat du build. Prérendre là-dessus produirait 17
     pages vides — exactement le problème qu'on corrige. */
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  if (template.includes('/src/main.jsx')) {
    console.error("✖ dist/index.html référence /src/main.jsx : ce n'est pas un build de production.");
    console.error('  Vite réécrit cette balise vers /assets/index-[hash].js. Relancez « npm run build ».');
    process.exit(1);
  }

  const server = await startServer(DIST, PORT);
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const jsErrors = [];
  page.on('pageerror', (e) => jsErrors.push(String(e.message || e)));

  const results = [];

  for (const def of PAGES) {
    const canonical = canonicalFor(def.path);
    const localUrl = `http://127.0.0.1:${PORT}${def.path === '/' ? '/' : def.path + '/'}`;

    jsErrors.length = 0;
    await page.goto(localUrl, { waitUntil: 'networkidle', timeout: 30000 });

    /* On attend du vrai TEXTE, pas seulement la présence de #root. Un <div>
       vide passerait un waitForSelector et on réécrirait une page vide. */
    try {
      await page.waitForFunction(
        (min) => {
          const root = document.getElementById('root');
          return root && (root.innerText || '').trim().length >= min;
        },
        MIN_TEXT,
        { timeout: 15000 }
      );
    } catch {
      /* On continue : le compte de caractères ci-dessous servira au verdict. */
    }

    const chars = await page.evaluate(
      () => (document.getElementById('root')?.innerText || '').trim().length
    );

    await page.evaluate(applyHead, { ...def, canonical });

    const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));

    const out = outputFor(def.path);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);

    results.push({ path: def.path, chars, errors: [...jsErrors] });

    console.log(`${chars >= MIN_TEXT ? '✔' : '✖'} ${canonical.padEnd(44)} ${String(chars).padStart(6)} caractères`);
    if (jsErrors.length) {
      console.log(`    erreur JS : ${jsErrors[0].slice(0, 120)}`);
    }
  }

  await browser.close();
  server.close();

  /* ---------------------------------------------------------------- */
  /* Vérifications : le bug ne doit pas pouvoir revenir en silence     */
  /* ---------------------------------------------------------------- */

  console.log('\n' + '─'.repeat(70));
  let failed = false;

  const empty = results.filter((r) => r.chars < MIN_TEXT);
  if (empty.length) {
    console.error(`✖ ${empty.length} page(s) rendue(s) quasi vide(s) :`);
    for (const r of empty) console.error(`    ${r.path} — ${r.chars} caractères`);
    console.error("\n  Prérendre une page vide ne corrige rien. Vérifiez que la route existe");
    console.error("  dans le routeur et que le rendu ne dépend pas d'un appel réseau.");
    failed = true;
  }

  /* Deux pages au texte identique, et Google les regroupera de nouveau, avec
     la même conséquence qu'aujourd'hui. Autant l'apprendre ici. */
  const seen = new Map();
  let dupes = 0;
  for (const def of PAGES) {
    const key = visibleText(outputFor(def.path)).slice(0, 4000);
    if (seen.has(key)) {
      console.error(`✖ ${def.path} a le même contenu visible que ${seen.get(key)}`);
      dupes++;
    } else {
      seen.set(key, def.path);
    }
  }

  if (dupes) {
    console.error(`\n✖ ${dupes} doublon(s) de contenu. Google refera exactement ce qu'il fait`);
    console.error("  aujourd'hui : il choisira une seule URL pour tout le groupe.");
    failed = true;
  }

  if (failed) process.exit(1);

  console.log(`✔ ${PAGES.length} pages écrites, toutes avec un contenu distinct.`);
  console.log('\n  À vérifier après déploiement, sans JavaScript :');
  console.log("      curl -s https://vndach.com/bons-achat/ | grep -o \"bon d'achat\" | head -1");
}

main().catch((e) => {
  console.error('✖', e);
  process.exit(1);
});
