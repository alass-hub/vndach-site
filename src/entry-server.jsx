/**
 * src/entry-server.jsx — le point d'entrée du rendu serveur.
 *
 * À placer dans src/, à côté de main.jsx.
 *
 * C'est le seul fichier ajouté à l'application. Il reprend exactement ce que
 * fait main.jsx, avec deux différences :
 *
 *   createRoot(...).render(...)  →  renderToString(...)   rend en texte
 *   <BrowserRouter>              →  <StaticRouter location={url}>
 *
 * `BrowserRouter` lit `window.location`, qui n'existe pas dans Node.
 * `StaticRouter` reçoit l'URL en paramètre : c'est toute la différence.
 */

import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

/**
 * @param {string} url chemin de la route, ex. '/bons-achat'
 * @returns {string} le HTML du contenu de #root
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}

/* ------------------------------------------------------------------ */
/* Si le build échoue                                                  */
/* ------------------------------------------------------------------ */

/*
 * ⚠ « You cannot render a <Router> inside another <Router> »
 *
 *   Votre App.jsx contient son propre <BrowserRouter>. Déplacez-le dans
 *   main.jsx, autour de <App />, et retirez-le d'App.jsx :
 *
 *     // main.jsx
 *     <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
 *
 *     // App.jsx — ne garde que <Routes>, plus de <BrowserRouter>
 *
 *   Le comportement côté visiteur est strictement identique.
 *
 * ⚠ « window is not defined » / « document is not defined »
 *
 *   Un composant lit window, document ou localStorage PENDANT le rendu.
 *   Déplacez cette lecture dans un useEffect : il ne s'exécute pas côté
 *   serveur, et c'est de toute façon là qu'elle doit être.
 *
 *     // avant — plante au rendu serveur
 *     const large = window.innerWidth > 768;
 *
 *     // après
 *     const [large, setLarge] = useState(false);
 *     useEffect(() => setLarge(window.innerWidth > 768), []);
 *
 *   Le message d'erreur de prerender.mjs nomme la route fautive : c'est par
 *   là qu'il faut chercher le composant.
 */
