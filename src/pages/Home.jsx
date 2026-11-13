import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero.webp';
const REFERENCE = [
  { to: '/cgu', title: "Conditions générales d'utilisation", desc: "Le contrat qui lie chaque utilisateur à la plateforme : inscription, vente, achat, paiement séquestré, contenus, modération." },
  { to: '/confidentialite', title: 'Politique de confidentialité', desc: "Quelles données sont collectées, pourquoi, combien de temps elles sont conservées et comment exercer vos droits." },
  { to: '/bons-achat', title: "Règlement des bons d'achat", desc: "Nature juridique des bons, conditions d'obtention, durée de validité de 90 jours et cas d'annulation." },
  { to: '/regles-communaute', title: 'Règles de la communauté', desc: "Ce qui est permis et ce qui ne l'est pas, les sanctions applicables et la procédure de signalement." },
];

const GUIDES = [
  { to: '/guides/acheter', title: 'Acheter en sécurité', desc: "Le paiement séquestré, le code de validation, et les trois erreurs qui vous feraient perdre toute protection." },
  { to: '/guides/vendre', title: 'Vendre sur la MarketPlace', desc: "Publier une annonce, fixer ses frais de livraison, être payé, et ce qui entraîne un bannissement." },
  { to: '/guides/creer', title: 'Publier et être récompensé', desc: "Comment fonctionnent les bons d'achat et comment ne pas les perdre." },
  { to: '/guides/confidentialite', title: 'Régler sa confidentialité', desc: "Qui voit votre profil, qui peut vous écrire, qui peut commenter : le chemin exact de chaque réglage." },
  { to: '/guides/donnees-mobiles', title: 'Économiser ses données', desc: "Les quatre réglages qui déterminent ce que l'application télécharge sur votre forfait." },
  { to: '/guides/signaler', title: 'Signaler un problème', desc: "Contenu choquant, arnaque, litige, compte piraté : à qui s'adresser et ce qui se passe ensuite." },
];

const AUDIENCES = [
  { to: '/a-propos', title: 'Vous découvrez Vndach', desc: "Ce que fait l'application, pour qui, et selon quels principes." },
  { to: '/autorites', title: 'Vous êtes une autorité', desc: "Procédure applicable aux réquisitions, demandes de conservation et urgences vitales." },
  { to: '/partenaires', title: 'Vous êtes partenaire ou investisseur', desc: "Modèle de fonctionnement, conformité réglementaire et types de partenariats recherchés." },
  { to: '/mentions-legales', title: 'Vous cherchez les mentions légales', desc: "Éditeur, hébergeur, propriété intellectuelle et accessibilité." },
];

export default function Home() {
  useEffect(() => {
    document.title = 'Vndach — Informations officielles';
  }, []);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Vndach SAS — informations officielles</h1>
          <p>
            Vndach réunit une place de marché, un réseau social et un
            portefeuille interne dans une seule application. Ce site publie
            les textes qui encadrent son fonctionnement et les guides
            nécessaires à son utilisation.
          </p>
          <p>
            Il est purement informatif : aucune démarche ne s'y effectue.
            Les actions concernant un compte se font dans l'application.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/cgu">Lire les conditions générales</Link>
            <Link className="btn btn-ghost" to="/guides">Consulter les guides</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Textes de référence</h2>
          <p className="lead">
            Ces quatre documents s'appliquent à tous les utilisateurs. Ils sont
            datés et versionnés ; toute modification substantielle est annoncée
            dans l'application quinze jours avant son entrée en vigueur.
          </p>
          <div className="grid">
            {REFERENCE.map((item) => (
              <Link className="card" to={item.to} key={item.to}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="more">Consulter →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>Guides pratiques</h2>
          <p className="lead">
            Chaque guide indique le chemin exact à suivre dans l'application.
            C'est généralement ce que l'on cherche : où se trouve le réglage,
            et que fait-il réellement.
          </p>
          <div className="grid">
            {GUIDES.map((item) => (
              <Link className="card" to={item.to} key={item.to}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="more">Lire le guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Selon qui vous êtes</h2>
          <div className="grid">
            {AUDIENCES.map((item) => (
              <Link className="card" to={item.to} key={item.to}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="more">Accéder →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2>Trois choses à retenir avant d'acheter</h2>
          <div className="grid">
            <div className="card">
              <h3>Votre argent est bloqué, pas versé</h3>
              <p>
                Le vendeur ne reçoit rien tant que vous n'avez pas confirmé la
                réception. C'est la protection principale de la plateforme, et
                elle ne fonctionne que si le paiement passe par l'application.
              </p>
            </div>
            <div className="card">
              <h3>Le code se donne après vérification</h3>
              <p>
                Le code de validation débloque définitivement les fonds. Un
                vendeur qui le réclame avant de remettre le colis tente de vous
                escroquer : refusez et signalez-le.
              </p>
            </div>
            <div className="card">
              <h3>Hors de l'application, plus de recours</h3>
              <p>
                Un transfert direct vers un Mobile Money personnel est
                irréversible. Aucun litige ne peut être ouvert et aucun
                remboursement n'est possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
