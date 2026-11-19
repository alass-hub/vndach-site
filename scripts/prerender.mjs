/**
 * scripts/prerender-ssg.mjs — prérendu sans navigateur.
 *
 *     npm run build          →  dist/          (le site pour le visiteur)
 *     npm run build:ssr      →  .ssr/          (la fonction render(), pour Node)
 *     node scripts/prerender-ssg.mjs
 *
 * Remplace la version Playwright. Rien à télécharger, aucune bibliothèque
 * système : c'est du React rendu par Node, exactement comme le fait Next.js.
 *
 * Sur Cloudflare Pages, Playwright téléchargeait bien Chromium mais ne pouvait
 * pas le lancer — `libatk-1.0.so.0: cannot open shared object file`. Sans accès
 * root, pas d'apt-get, donc pas de solution. Ici le problème ne se pose plus.
 */

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://vndach.com';
const DIST = path.resolve('dist');
const SSR = path.resolve('.ssr');

/* ⚠ Ces chemins doivent correspondre EXACTEMENT à vos <Route path>, à la forme
   canonique du sitemap, et à vos liens internes. */
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

/* Seuil volontairement bas : il n'attrape que le rendu réellement vide.
   Le vrai garde-fou est la détection de doublons plus bas — si une route n'est
   pas reconnue, toutes les pages rendent le même élément « 404 », et c'est le
   doublon qui le révèle, pas la longueur. */
const MIN_TEXT = 60;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/* ------------------------------------------------------------------ */
/* <head>                                                              */
/* ------------------------------------------------------------------ */

/**
 * On SUPPRIME puis on RÉÉCRIT, au lieu de remplacer.
 *
 * L'ancien script faisait .replace() sur des balises og:title et
 * og:description absentes d'index.html. Un .replace() sans correspondance
 * renvoie la chaîne inchangée, sans erreur : aucune page n'a jamais eu
 * d'og:title, et un partage WhatsApp n'affichait que « Vndach ».
 */
function applyHead(html, { title, description, canonical }) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);

  const drop = [
    /<meta\s+name="description"[^>]*>\s*/gi,
    /<meta\s+property="og:title"[^>]*>\s*/gi,
    /<meta\s+property="og:description"[^>]*>\s*/gi,
    /<meta\s+property="og:url"[^>]*>\s*/gi,
    /<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi,
    /<link\s+rel="canonical"[^>]*>\s*/gi,
  ];
  for (const re of drop) out = out.replace(re, '');

  const tags = [
    `<meta name="description" content="${esc(description)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
  ].map((t) => '    ' + t).join('\n');

  return out.replace(/<\/head>/i, `${tags}\n  </head>`);
}

/* ------------------------------------------------------------------ */

const canonicalFor = (p) => (p === '/' ? `${SITE}/` : `${SITE}${p}/`);
const outputFor = (p) =>
  p === '/' ? path.join(DIST, 'index.html') : path.join(DIST, p, 'index.html');

function visibleText(html) {
  return html
    .replace(/^[\s\S]*?<body[^>]*>/i, '')
    .replace(/<\/body>[\s\S]*$/i, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function main() {
  const templatePath = path.join(DIST, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`✖ ${templatePath} introuvable. Lancez « npm run build » d'abord.`);
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  if (template.includes('/src/main.jsx')) {
    console.error("✖ dist/index.html référence /src/main.jsx : ce n'est pas un build de production.");
    process.exit(1);
  }

  /* dist/index.html sert de modèle ET reçoit la page d'accueil : après un
     premier passage, son #root n'est plus vide. Relancer le script sans
     refaire « npm run build » injecterait alors l'accueil dans les 17 pages.
     On refuse de partir dans ce cas plutôt que de produire un dist corrompu. */
  if (!/<div id="root">\s*<\/div>/.test(template)) {
    console.error('✖ dist/index.html ne contient pas un <div id="root"></div> vide.');
    console.error('  Soit le prérendu a déjà tourné dessus, soit votre index.html a changé.');
    console.error('  Relancez « npm run build » avant ce script — toujours dans cet ordre.');
    process.exit(1);
  }

  /* Vite nomme la sortie SSR d'après le fichier d'entrée. On cherche plutôt
     que de supposer : le nom change si vous renommez entry-server.jsx. */
  const entry = fs.existsSync(SSR)
    ? fs.readdirSync(SSR).find((f) => f.endsWith('.js') || f.endsWith('.mjs'))
    : null;

  if (!entry) {
    console.error(`✖ Aucun module trouvé dans ${SSR}/`);
    console.error('  Lancez « npm run build:ssr » avant ce script.');
    process.exit(1);
  }

  let render;
  try {
    ({ render } = await import(pathToFileURL(path.join(SSR, entry)).href));
  } catch (e) {
    console.error('✖ Impossible de charger', path.join(SSR, entry));
    console.error(' ', e.message);
    process.exit(1);
  }

  if (typeof render !== 'function') {
    console.error('✖ entry-server.jsx doit exporter une fonction nommée « render ».');
    process.exit(1);
  }

  const results = [];
  let failed = false;

  for (const def of PAGES) {
    const canonical = canonicalFor(def.path);

    let body;
    try {
      body = render(def.path);
    } catch (e) {
      console.error(`✖ ${def.path}`);
      console.error(`    ${e.message}`);

      /* Les deux erreurs qu'on rencontre vraiment, avec leur correctif, pour
         éviter d'aller chercher dans une trace de pile React. */
      if (/window is not defined|document is not defined|localStorage/.test(e.message)) {
        console.error('    → un composant lit window/document PENDANT le rendu.');
        console.error('      Déplacez cette lecture dans un useEffect.');
      }
      if (/Router.*inside another.*Router/i.test(e.message)) {
        console.error('    → votre App.jsx contient son propre <BrowserRouter>.');
        console.error('      Déplacez-le dans main.jsx, autour de <App />.');
      }
      failed = true;
      continue;
    }

    let html = template.replace(
      /<div id="root">\s*<\/div>/,
      `<div id="root">${body}</div>`
    );

    if (!html.includes(body.slice(0, 40))) {
      console.error(`✖ ${def.path} : <div id="root"></div> introuvable dans dist/index.html.`);
      console.error('  Le contenu n\'a pas pu être injecté. Vérifiez votre index.html.');
      failed = true;
      continue;
    }

    html = applyHead(html, { ...def, canonical });

    const out = outputFor(def.path);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);

    const chars = visibleText(html).length;
    results.push({ path: def.path, chars });
    console.log(`${chars >= MIN_TEXT ? '✔' : '✖'} ${canonical.padEnd(44)} ${String(chars).padStart(6)} caractères`);
  }

  console.log('\n' + '─'.repeat(70));

  if (failed) {
    console.error('✖ Certaines routes n\'ont pas pu être rendues.');
    process.exit(1);
  }

  const empty = results.filter((r) => r.chars < MIN_TEXT);
  if (empty.length) {
    console.error(`✖ ${empty.length} page(s) rendue(s) quasi vide(s) :`);
    for (const r of empty) console.error(`    ${r.path} — ${r.chars} caractères`);
    console.error("\n  Vérifiez que ces chemins existent dans vos <Route path>.");
    console.error('  Une route non reconnue rend la page 404, donc presque rien.');
    process.exit(1);
  }

  /* Deux pages identiques, et Google les regroupera de nouveau — avec la même
     conséquence qu'aujourd'hui. Autant l'apprendre au build. */
  const seen = new Map();
  let dupes = 0;
  for (const def of PAGES) {
    const key = visibleText(fs.readFileSync(outputFor(def.path), 'utf8')).slice(0, 4000);
    if (seen.has(key)) {
      console.error(`✖ ${def.path} a le même contenu visible que ${seen.get(key)}`);
      dupes++;
    } else {
      seen.set(key, def.path);
    }
  }

  if (dupes) {
    console.error(`\n✖ ${dupes} doublon(s). Google refera ce qu'il fait aujourd'hui :`);
    console.error("  il choisira une seule URL pour tout le groupe.");
    process.exit(1);
  }

  console.log(`✔ ${PAGES.length} pages écrites, toutes avec un contenu distinct.`);
}

main().catch((e) => {
  console.error('✖', e);
  process.exit(1);
});
