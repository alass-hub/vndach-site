/* ==========================================================================
   Pages institutionnelles.

   ⚠️ Les mentions « À COMPLÉTER » doivent être remplies avant toute mise
   en ligne : les mentions légales sont obligatoires et leur absence est
   sanctionnée.
   ========================================================================== */

export const apropos = {
  slug: 'a-propos',
  title: 'À propos de Vndach SAS',
  category: 'Institution',
  updated: '9 octobre 2026',
  summary:
    "Vndach SAS est une application sénégalaise qui réunit une place de marché, un réseau social et un portefeuille interne dans un seul compte. Cette page explique ce que fait l'application, pour qui, et selon quels principes.",
  sections: [
    {
      id: 'mission',
      title: 'Ce que nous construisons',
      blocks: [
        { p: "Une grande partie du commerce en Afrique de l'Ouest se fait aujourd'hui dans des conversations : une photographie envoyée, un prix négocié, un transfert d'argent, et la confiance pour seule garantie. Cela fonctionne entre proches. Cela échoue dès qu'on sort du cercle connu." },
        { p: "Vndach existe pour combler cet écart : permettre à deux personnes qui ne se connaissent pas de conclure une transaction sans que l'une ait à faire aveuglément confiance à l'autre. Le paiement séquestré, le code de validation remis à la livraison et le service d'arbitrage ont tous cette fonction." },
        { p: "Autour de cette place de marché, l'application réunit un réseau social, un espace professionnel et un espace d'événements, accessibles depuis le même compte." },
      ],
    },
    {
      id: 'principes',
      title: 'Nos principes',
      blocks: [
        { h3: 'Le forfait de l\'utilisateur est une contrainte, pas un détail' },
        { p: "Rien ne se télécharge sans action de l'utilisateur. Les vidéos ne démarrent seules qu'en Wi-Fi par défaut. Les médias reçus dans les conversations restent des vignettes tant qu'on ne les ouvre pas. Ces choix sont volontaires et réglables." },
        { h3: 'Les réglages de confidentialité sont réels' },
        { p: "Quand un réglage dit qu'une information est masquée, elle l'est côté serveur, pas seulement à l'affichage. Un contrôle qui ne protège qu'en apparence est pire qu'une absence de contrôle." },
                { h3: 'Les règles valent pour tout le monde' },
        { p: "Un compte à forte audience n'est pas modéré différemment d'un compte ordinaire." },
      ],
    },
    {
      id: 'services',
      title: 'Les services',
      blocks: [
        {
          table: {
            head: ['Espace', 'À quoi il sert'],
            rows: [
              ['MarketPlace', 'Acheter et vendre des biens et services, avec paiement séquestré'],
              ['Social', 'Publier, commenter, échanger, suivre des sujets et des comptes'],
              ['Professionnel', "Offres d'emploi, recherches de poste, missions"],
              ['Événements', 'Annoncer et retrouver des rendez-vous'],
              ['Messagerie', 'Conversations privées, groupes et Sides'],
              ['Portefeuille', "Bons d'achat gagnés par l'audience, utilisables sur la MarketPlace"],
            ],
          },
        },
        { note: "Tous les espaces ne sont pas nécessairement ouverts en même temps. L'application permet de choisir l'espace dans lequel on souhaite se trouver." },
      ],
    },
  ],
};

export const autorites = {
  slug: 'autorites',
  title: 'Informations pour les autorités',
  category: 'Institution',
  updated: '9 octobre 2026',
  summary:
    "Procédure applicable aux demandes émanant des autorités administratives et judiciaires : réquisitions, demandes de conservation, retraits de contenus et urgences mettant une vie en danger.",
  sections: [
    {
      id: 'principe',
      title: 'Principe général',
      blocks: [
        { p: "Vndach répond aux demandes régulières des autorités compétentes dans le cadre fixé par la loi sénégalaise et, le cas échéant, par les instruments de coopération internationale applicables." },
        { p: "Chaque demande est examinée quant à sa régularité formelle, sa base légale et sa proportionnalité. Les demandes manifestement excessives ou dépourvues de base légale font l'objet d'une réponse motivée." },
      ],
    },
    {
      id: 'forme',
      title: 'Forme de la demande',
      blocks: [
        { p: "Une demande recevable comporte les éléments suivants :" },
        {
          list: [
            "l'identification de l'autorité requérante et la qualité du signataire ;",
            "le fondement légal précis de la demande ;",
            "l'identification du compte visé : numéro de téléphone, pseudonyme ou identifiant de publication ;",
            "la période concernée ;",
            "la nature exacte des éléments demandés ;",
            "une adresse officielle pour la réponse.",
          ],
        },
        { note: "Une demande portant sur « toutes les données » d'un compte sans délimitation temporelle ni objet précis ne peut être traitée en l'état et donnera lieu à une demande de précision." },
      ],
    },
    {
      id: 'donnees',
      title: 'Données susceptibles d\'être communiquées',
      blocks: [
        {
          table: {
            head: ['Catégorie', 'Disponibilité'],
            rows: [
              ['Données d\'inscription', 'Numéro de téléphone, date de création, nom déclaré'],
              ['Journaux de connexion', 'Conservés 12 mois'],
              ['Contenus publics', 'Publications et commentaires accessibles à tous'],
              ['Transactions', 'Historique des commandes, montants, statuts (conservés 10 ans)'],
              ['Messages privés', 'Sur réquisition judiciaire uniquement, dans la limite de ce qui est conservé'],
            ],
          },
        },
      ],
    },
    {
      id: 'conservation',
      title: 'Demande de conservation',
      blocks: [
        { p: "Une autorité peut demander la conservation de données avant l'obtention de l'acte autorisant leur communication. La conservation est alors assurée pour une durée de quatre-vingt-dix jours, renouvelable une fois sur demande motivée." },
      ],
    },
    {
      id: 'urgence',
      title: 'Urgences vitales',
      blocks: [
        { warning: "En cas de danger imminent pour la vie ou l'intégrité physique d'une personne, la demande doit porter la mention « URGENCE VITALE » dans son objet. Elle est traitée en priorité, dans les meilleurs délais compatibles avec la vérification de son authenticité." },
      ],
    },
    {
      id: 'signalement-spontane',
      title: 'Signalements effectués par Vndach',
      blocks: [
        { p: "Indépendamment de toute demande, Vndach signale spontanément aux autorités compétentes les faits portés à sa connaissance qui relèvent de l'exploitation de mineurs, de la traite d'êtres humains, du trafic d'organes ou d'une menace crédible contre des personnes." },
      ],
    },
    {
      id: 'contact-autorites',
      title: 'Adresse de transmission',
      blocks: [
        { p: "Les demandes sont adressées à : contact@vndach.com" },
      ],
    },
  ],
};

export const partenaires = {
  slug: 'partenaires',
  title: 'Partenaires et investisseurs',
  category: 'Institution',
  updated: '9 octobre 2026',
  summary:
    "Informations destinées aux partenaires commerciaux, aux institutions financières, aux organismes de développement et aux investisseurs souhaitant comprendre le fonctionnement et le modèle de Vndach.",
  sections: [
    {
      id: 'modele',
      title: 'Modèle de fonctionnement',
      blocks: [
        { p: "Vndach est un intermédiaire technique. L'application ne détient pas de stock, n'achète ni ne revend de marchandise, et n'intervient pas dans la relation commerciale autrement que par la fourniture d'une infrastructure de confiance." },
        { p: "Le flux financier transite par un séquestre : les fonds de l'acheteur sont immobilisés jusqu'à confirmation de la livraison, puis reversés au vendeur sur son compte Mobile Money. Cette mécanique constitue le cœur du service." },
        { p: "Les bons d'achat distribués aux créateurs de contenu sont une unité de compte interne non convertible. Ils ne génèrent aucune obligation de paiement en numéraire et ne constituent ni monnaie électronique, ni dépôt." },
      ],
    },
    {
      id: 'contexte',
      title: 'Contexte',
      blocks: [
        { p: "Le commerce informel représente une part majeure de l'activité économique en Afrique de l'Ouest. Il s'exerce aujourd'hui largement sur des messageries généralistes, sans traçabilité, sans protection de l'acheteur et sans justificatif pour le vendeur." },
        { p: "Vndach adresse ce segment en fournissant trois éléments qui lui manquent : une garantie de paiement, un reçu de transaction pour les vendeurs sans immatriculation, et un mécanisme de règlement des litiges." },
      ],
    },
    {
      id: 'conformite',
      title: 'Conformité',
      blocks: [
        {
          list: [
            "Protection des données : loi n° 2008-12 du 25 janvier 2008, sous le contrôle de la Commission de protection des données personnelles (CDP).",
            "Droit des affaires : actes uniformes de l'OHADA.",
            "Commerce électronique : législation sénégalaise applicable, incluant le droit de rétractation.",
            "Lutte contre le blanchiment : conservation des justificatifs de transaction et coopération avec les autorités compétentes.",
          ],
        },
      ],
    },
    {
      id: 'partenariats',
      title: 'Types de partenariats recherchés',
      blocks: [
        {
          list: [
            "opérateurs de paiement mobile et agrégateurs ;",
            "services de livraison et de logistique urbaine ;",
            "institutions de microfinance et d'inclusion financière ;",
            "organismes publics et programmes de formalisation des petites entreprises ;",
            "établissements d'enseignement, pour les déploiements pilotes.",
          ],
        },
        { p: "Les demandes sont adressées à : contact@vndach.com" },
      ],
    },
    {
      id: 'presse',
      title: 'Presse',
      blocks: [
        { p: "Les demandes d'interview, de données chiffrées et d'éléments visuels sont adressées à : network@vndach.com - contact@vndach.com" },
        { p: "Le logotype et les captures d'écran officielles sont mis à disposition sur demande. Leur usage est autorisé dans un cadre éditorial, sans modification ni association à un produit tiers." },
      ],
    },
  ],
};

export const mentions = {
  slug: 'mentions-legales',
  title: 'Mentions légales',
  category: 'Institution',
  updated: '9 octobre 2026',
  summary:
    "Informations relatives à l'éditeur du service, à son hébergeur et aux conditions de reproduction du contenu de ce site.",
  sections: [
   /* {
      id: 'editeur',
      title: 'Éditeur',
      blocks: [
        {
          table: {
            head: ['Élément', 'Valeur'],
            rows: [
              ['Dénomination sociale', 'À COMPLÉTER'],
              ['Forme juridique', 'À COMPLÉTER'],
              ['Capital social', 'À COMPLÉTER'],
              ['Siège social', 'À COMPLÉTER'],
              ['RCCM', 'À COMPLÉTER'],
              ['NINEA', 'À COMPLÉTER'],
              ['Directeur de la publication', 'À COMPLÉTER'],
              ['Adresse électronique', 'À COMPLÉTER'],
              ['Téléphone', 'À COMPLÉTER'],
            ],
          },
        },
        { warning: "Ces informations sont obligatoires. Elles doivent être renseignées avant la mise en ligne du site." },
      ],
    },
    {
      id: 'hebergeur',
      title: 'Hébergeur',
      blocks: [
        {
          table: {
            head: ['Élément', 'Valeur'],
            rows: [
              ['Dénomination', 'À COMPLÉTER'],
              ['Adresse', 'À COMPLÉTER'],
              ['Téléphone', 'À COMPLÉTER'],
            ],
          },
        },
      ],
    },*/
    {
      id: 'propriete',
      title: 'Propriété intellectuelle',
      blocks: [
        { p: "La structure de ce site, sa charte graphique, ses textes et le logotype Vndach sont protégés. Toute reproduction, représentation ou adaptation, totale ou partielle, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable." },
        { p: "Les citations courtes à des fins d'information, de critique ou d'enseignement demeurent libres, sous réserve de mentionner la source." },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies et mesure d\'audience',
      blocks: [
        { p: "Ce site d'information ne dépose aucun cookie publicitaire et n'utilise aucun traceur tiers. Aucun compte n'y est créé et aucune donnée personnelle n'y est collectée." },
        { p: "L'application mobile est régie par la politique de confidentialité, qui est un document distinct." },
      ],
    },
    {
      id: 'accessibilite',
      title: 'Accessibilité',
      blocks: [
        { p: "Ce site est conçu pour rester lisible sans feuille de style, utilisable au clavier seul et compatible avec les lecteurs d'écran. Les textes sont structurés par des titres hiérarchisés et le contraste respecte les recommandations d'accessibilité." },
        { p: "Si vous rencontrez une difficulté d'accès à une information, signalez-la à l'adresse de contact : une alternative vous sera proposée." },
      ],
    },
  ],
};

export const contact = {
  slug: 'contact',
  title: 'Nous contacter',
  category: 'Institution',
  updated: '9 octobre 2026',
  summary:
    "Ce site est purement informatif. Les démarches concernant votre compte se font dans l'application, qui est le seul canal permettant de vous identifier avec certitude.",
  sections: [
    {
      id: 'application',
      title: "D'abord, l'application",
      blocks: [
        { p: "La plupart des demandes se traitent plus vite depuis l'application, parce qu'elle sait qui vous êtes et à quelle commande ou publication vous faites référence." },
        {
          table: {
            head: ['Votre besoin', 'Où aller'],
            rows: [
              ['Signaler un contenu ou un compte', 'Menu « … » de la publication ou du profil'],
              ['Ouvrir un litige sur une commande', 'Profil → Mes commandes'],
              ['Modifier vos informations', 'Profil → Paramètres → Informations personnelles'],
              ['Supprimer votre compte', 'Profil → Paramètres → Sécurité'],
              ['Contester une décision de modération', 'Profil → Paramètres → Aide et support'],
            ],
          },
        },
      ],
    },
    {
      id: 'adresses',
      title: 'Adresses de contact',
      blocks: [
        {
          table: {
            head: ['Objet', 'Adresse'],
            rows: [
              ['Support utilisateurs', 'support@vndach.com'],
              ['Protection des données', 'security@vndach.com'],
              ['Signalement légal et retrait de contenu', 'confidential@vndach.com'],
              ['Autorités', 'contact@vndach.com'],
              ['Presse', 'network@vndach.com'],
              ['Partenariats', 'commercial@vndach.com'],
            ],
          },
        },
        { note: "Précisez toujours votre pseudonyme ou le numéro de téléphone associé au compte : sans cette information, une demande concernant un compte ne peut pas être traitée." },
      ],
    },
    {
      id: 'delais',
      title: 'Délais de réponse',
      blocks: [
        {
          list: [
            "signalement de contenu : traitement prioritaire, sans réponse individuelle systématique ;",
            "demande relative à vos données personnelles : un mois maximum ;",
            "litige commercial : examen dès réception des pièces des deux parties ;",
            "demande d'une autorité : selon l'urgence indiquée.",
          ],
        },
      ],
    },
  ],
};

export const institutionnelDocs = [apropos, autorites, partenaires, mentions, contact];
