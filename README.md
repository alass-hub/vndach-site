# Site d'information Vndach

Site statique, sans backend. Tout le contenu est dans `src/content/`.

## Démarrer

```bash
npm install
npm run dev
```

## Construire

```bash
npm run build      # produit dist/
npm run preview    # vérifie le résultat localement
```

`dist/` se dépose tel quel sur n'importe quel hébergement statique
(Netlify, Vercel, Cloudflare Pages, ou un simple Nginx).

### Nginx — réécriture pour le routage côté client

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Sans cette ligne, ouvrir directement `/cgu` renvoie une 404.

## Modifier les textes

Aucune connaissance de React n'est nécessaire. Les documents sont des
objets JavaScript dans :

- `src/content/legal.js` — CGU, confidentialité, bons d'achat, règles
- `src/content/guides.js` — guides pratiques
- `src/content/institutionnel.js` — à propos, autorités, presse, contact

Chaque document suit la même forme :

```js
{
  slug: 'cgu',
  title: 'Conditions générales d\'utilisation',
  updated: '9 octobre 2026',
  sections: [
    { id: 'objet', title: 'Objet', blocks: [
      { p: 'Un paragraphe.' },
      { list: ['Un point', 'Un autre'] },
      { note: 'Un encadré d\'information.' },
    ]},
  ],
}
```

Types de blocs disponibles : `p`, `h3`, `list`, `ordered`, `note`,
`warning`, `steps`, `table`, `path`.

## Ce qui reste à compléter

Les mentions marquées « À COMPLÉTER » dans `src/content/institutionnel.js`
(raison sociale, RCCM, NINEA, adresse, hébergeur) doivent être remplies
avant toute mise en ligne : elles sont légalement obligatoires.
