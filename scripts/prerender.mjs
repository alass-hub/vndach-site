/* ==========================================================================
   Pré-rendu des pages.

   Vite produit un seul index.html. Ce script en génère un par adresse,
   avec son propre titre, sa description, sa balise canonique et son
   contenu déjà écrit dans le HTML.

   Trois bénéfices :
     - Google voit des pages distinctes, et cesse de les traiter comme
       des doublons ;
     - le texte est lisible sans exécuter le JavaScript, donc indexable
       immédiatement et affichable sur une connexion lente ;
     - React remplace ce contenu au montage, sans conflit : createRoot
       écrase les enfants existants.

   Lancé automatiquement après `vite build`.
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const SITE = 'https://vndach.com';   // hôte canonique, sans www

import { pathToFileURL } from 'node:url';

const contentUrl = pathToFileURL(join(root, 'src/content/index.js')).href;
const { allDocs, guides } = await import(contentUrl);

/* ------------------------------------------------------------- échappement */

const esc = (text) => String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/** Le gras **ainsi** des contenus, comme dans Blocks.jsx. */
const inline = (text) => esc(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

/* ------------------------------------------------------- blocs → HTML */

const renderBlock = (block) => {
  if (block.h3) return `<h3>${inline(block.h3)}</h3>`;
  if (block.p) return `<p>${inline(block.p)}</p>`;
  if (block.list) return `<ul>${block.list.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
  if (block.ordered) return `<ol>${block.ordered.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
  if (block.steps) return `<ol class="steps">${block.steps.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
  if (block.note) return `<div class="note"><strong>À savoir</strong>${inline(block.note)}</div>`;
  if (block.warning) return `<div class="warning"><strong>Important</strong>${inline(block.warning)}</div>`;
  if (block.path) return `<code class="path">${esc(block.path)}</code>`;
  if (block.table) {
    const head = block.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('');
    const rows = block.table.rows
      .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
      .join('');
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  return '';
};

const renderDoc = (doc) => `
<nav class="crumbs"><div class="wrap"><a href="/">Accueil</a> › <span>${esc(doc.category)}</span></div></nav>
<div class="wrap"><div class="doc"><article class="doc-body">
  <h1 class="doc-title">${esc(doc.title)}</h1>
  <p class="doc-meta">Dernière mise à jour : ${esc(doc.updated)}${doc.version ? ` · Version ${esc(doc.version)}` : ''}</p>
  ${doc.summary ? `<p class="doc-summary">${esc(doc.summary)}</p>` : ''}
  ${doc.sections.map((s) => `
    <section id="${esc(s.id)}">
      <h2>${esc(s.title)}</h2>
      ${s.blocks.map(renderBlock).join('')}
    </section>`).join('')}
</article></div></div>`;

/* ------------------------------------------------------------- en-tête */

const buildHead = (template, { title, description, path }) => {
  const url = `${SITE}${path}`;
  const fullTitle = `${title} — Vndach`;

  return template
    .replace(/<title>.*?<\/title>/s, `<title>${esc(fullTitle)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${esc(description)}" />`,
    )
    .replace(
      '</head>',
      // La balise canonique est ce qui manquait : elle dit à Google
      // quelle adresse fait foi pour cette page.
      `  <link rel="canonical" href="${esc(url)}" />\n`
      + `    <meta property="og:url" content="${esc(url)}" />\n`
      + `    <meta property="og:title" content="${esc(fullTitle)}" />\n`
      + `    <meta property="og:description" content="${esc(description)}" />\n`
      + '  </head>',
    );
};

const writePage = (path, html) => {
  const dir = path === '/' ? dist : join(dist, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
};

/* ------------------------------------------------------------- génération */

const template = readFileSync(join(dist, 'index.html'), 'utf8');
let count = 0;

// Accueil : on garde le contenu du bundle, on ne corrige que l'en-tête.
writePage('/', buildHead(template, {
  title: 'Informations officielles',
  description: "Conditions générales, politique de confidentialité, règles de la communauté et guides d'utilisation de Vndach.",
  path: '/',
}));
count++;

// Index des guides
writePage('/guides', buildHead(template, {
  title: 'Guides pratiques',
  description: "Acheter en sécurité, vendre sur la MarketPlace, régler sa confidentialité, économiser ses données.",
  path: '/guides',
}).replace(
  '<div id="root"></div>',
  `<div id="root"><div class="wrap"><h1>Guides pratiques</h1><ul>${
    guides.map((g) => `<li><a href="/${esc(g.slug)}">${esc(g.title)}</a> — ${esc(g.summary)}</li>`).join('')
  }</ul></div></div>`,
));
count++;

// Un fichier par document
for (const doc of allDocs) {
  const html = buildHead(template, {
    title: doc.title,
    description: (doc.summary || doc.title).slice(0, 300),
    path: `/${doc.slug}`,
  }).replace('<div id="root"></div>', `<div id="root">${renderDoc(doc)}</div>`);

  writePage(`/${doc.slug}`, html);
  count++;
}

console.log(`Pré-rendu : ${count} pages générées.`);
