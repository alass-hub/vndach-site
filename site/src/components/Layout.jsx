import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from './vendach-logo.png';

const NAV = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos', label: 'À propos' },
  { to: '/guides', label: 'Guides' },
  { to: '/cgu', label: 'Conditions' },
  { to: '/confidentialite', label: 'Confidentialité' },
  { to: '/regles-communaute', label: 'Règles' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu principal</a>


      <header className="header">
        <div className="wrap">
          <div className="header-main">
            <Link to="/" className="brand" onClick={() => setOpen(false)}>
  <img src={logo} alt="" className="brand-mark" width="44" height="44" />
  <span className="brand-text">
    <strong>Vndach</strong>
    <span>Informations officielles</span>
  </span>
</Link>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="menu-principal"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Fermer' : 'Menu'}
            </button>

            <nav
              id="menu-principal"
              className={`nav${open ? ' open' : ''}`}
              aria-label="Navigation principale"
            >
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="contenu">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h4>Textes de référence</h4>
              <ul>
                <li><Link to="/cgu">Conditions générales</Link></li>
                <li><Link to="/confidentialite">Politique de confidentialité</Link></li>
                <li><Link to="/bons-achat">Règlement des bons d'achat</Link></li>
                <li><Link to="/regles-communaute">Règles de la communauté</Link></li>
              </ul>
            </div>

            <div>
              <h4>Guides</h4>
              <ul>
                <li><Link to="/guides/acheter">Acheter en sécurité</Link></li>
                <li><Link to="/guides/vendre">Vendre sur la MarketPlace</Link></li>
                <li><Link to="/guides/confidentialite">Régler sa confidentialité</Link></li>
                <li><Link to="/guides/donnees-mobiles">Économiser ses données</Link></li>
                <li><Link to="/guides/signaler">Signaler un problème</Link></li>
              </ul>
            </div>

            <div>
              <h4>Institution</h4>
              <ul>
                <li><Link to="/a-propos">À propos</Link></li>
                <li><Link to="/autorites">Pour les autorités</Link></li>
                <li><Link to="/partenaires">Partenaires et presse</Link></li>
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
                <li><Link to="/contact">Nous contacter</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Vndach. Tous droits réservés.</span>
            <span>Dakar, Sénégal</span>
          </div>
        </div>
      </footer>
    </>
  );
}
