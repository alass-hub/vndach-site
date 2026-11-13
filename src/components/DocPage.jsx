import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Blocks from './Blocks';

/**
 * Gabarit unique de tous les documents : sommaire ancré à gauche, texte à
 * droite. Un seul gabarit garantit que tous les textes se lisent de la
 * même façon — c'est l'essentiel sur un site de référence.
 */
export default function DocPage({ doc }) {
  useEffect(() => {
    document.title = `${doc.title} — Vndach`;
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <>
      <nav className="crumbs" aria-label="Fil d'Ariane">
        <div className="wrap">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true"> › </span>
          <span>{doc.category}</span>
          <span aria-hidden="true"> › </span>
          <span>{doc.title}</span>
        </div>
      </nav>

      <div className="wrap">
        <div className="doc">
          <aside className="toc" aria-label="Sommaire du document">
            <strong>Sommaire</strong>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
              ))}
            </ol>
          </aside>

          <article className="doc-body">
            <h1 className="doc-title">{doc.title}</h1>

            <p className="doc-meta">
              Dernière mise à jour : {doc.updated}
              {doc.version ? ` · Version ${doc.version}` : ''}
            </p>

            {doc.summary ? <p className="doc-summary">{doc.summary}</p> : null}

            {doc.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}

            <footer className="doc-footer">
              <p>
                Ce document est publié à titre d'information. En cas de
                divergence entre une traduction et la version française,
                la version française fait foi.
              </p>
              <p>
                Une question sur ce texte ?{' '}
                <Link to="/contact">Nous contacter</Link>.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}
