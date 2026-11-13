import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { guides } from '../content';

export default function GuidesIndex() {
  useEffect(() => {
    document.title = 'Guides — Vndach';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="crumbs" aria-label="Fil d'Ariane">
        <div className="wrap">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true"> › </span>
          <span>Guides</span>
        </div>
      </nav>

      <section className="section">
        <div className="wrap">
          <h2>Guides pratiques</h2>
          <p className="lead">
            Ces pages expliquent comment faire, pas seulement ce qui est permis.
            Chacune indique le chemin exact dans l'application.
          </p>
          <div className="grid">
            {guides.map((g) => (
              <Link className="card" to={`/${g.slug}`} key={g.slug}>
                <h3>{g.title}</h3>
                <p>{g.summary}</p>
                <span className="more">Lire le guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
