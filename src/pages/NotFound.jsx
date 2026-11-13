import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => { document.title = 'Page introuvable — Vndach'; }, []);

  return (
    <section className="section">
      <div className="wrap">
        <h2>Page introuvable</h2>
        <p className="lead">
          L'adresse demandée ne correspond à aucune page de ce site. Elle a
          peut-être changé depuis la dernière mise à jour.
        </p>
        <p>
          <Link className="btn btn-primary" to="/">Retour à l'accueil</Link>
        </p>
      </div>
    </section>
  );
}
