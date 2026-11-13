/* ==========================================================================
   Guides pratiques.
   Chaque guide indique le chemin exact dans l'application : c'est ce que
   les gens cherchent réellement quand ils arrivent sur un site d'aide.
   ========================================================================== */

export const guideAcheteur = {
  slug: 'guides/acheter',
  title: 'Acheter en sécurité',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Comment commander sur Vndach, ce que protège le paiement séquestré, et les trois erreurs qui vous feraient perdre cette protection.",
  sections: [
    {
      id: 'commander',
      title: 'Passer une commande',
      blocks: [
        {
          steps: [
            "Ouvrez la fiche du produit et vérifiez la description, les photographies et la zone de livraison.",
            "Appuyez sur « Ajouter au panier », puis ouvrez votre panier.",
            "Vérifiez que le prix affiché inclut la livraison : c'est une obligation du vendeur.",
            "Validez le paiement dans l'application, par Mobile Money ou avec vos bons d'achat.",
            "Suivez l'état de la commande depuis Profil → Mes commandes.",
          ],
        },
      ],
    },
    {
      id: 'sequestre',
      title: "Ce que protège le paiement dans l'application",
      blocks: [
        { p: "Votre argent n'est pas versé au vendeur au moment du paiement. Il est bloqué en séquestre par la plateforme." },
        { p: "Le vendeur ne reçoit sa somme que lorsque vous confirmez la réception du produit et que vous lui communiquez le code de validation, ou automatiquement trois jours après la livraison signalée si vous ne contestez pas." },
        { warning: "Ne donnez jamais le code de validation avant d'avoir reçu le colis et vérifié son contenu. Un vendeur qui réclame le code avant la remise tente de vous escroquer : refusez et signalez-le." },
      ],
    },
    {
      id: 'reception',
      title: 'À la réception du colis',
      blocks: [
        {
          list: [
            "Ouvrez et vérifiez le produit devant le livreur quand c'est possible.",
            "Ne payez aucun supplément de livraison : les frais étaient inclus dans votre paiement.",
            "Si le produit est conforme, confirmez la réception dans l'application et donnez le code.",
            "Si le produit est cassé, non conforme ou contrefait, refusez-le et ne donnez pas le code. La transaction s'annule automatiquement sous trois jours.",
          ],
        },
      ],
    },
    {
      id: 'retour',
      title: 'Retourner un produit',
      blocks: [
        { p: "Vous disposez de sept jours calendaires après la réception pour retourner un produit sans avoir à vous justifier. Le produit doit être neuf, non utilisé, dans son emballage d'origine." },
        { p: "Les frais de retour physique sont à votre charge. Une fois le retour reçu et constaté conforme par le vendeur, vos bons d'achat sont intégralement recrédités." },
        { path: "Profil → Mes commandes → la commande concernée → Demander un retour." },
      ],
    },
    {
      id: 'erreurs',
      title: 'Les trois erreurs à ne pas commettre',
      blocks: [
        { h3: '1. Accepter de « passer en direct »' },
        { p: "Si un vendeur vous propose de payer par un autre moyen ou de conclure sur une autre application, vous perdez toute protection : pas de séquestre, pas de litige possible, pas de remboursement. Signalez-le." },
        { h3: '2. Envoyer de l\'argent sur un Mobile Money personnel' },
        { p: "La plateforme ne rembourse jamais une somme envoyée directement au numéro personnel d'un vendeur. Ce type de transfert est irréversible." },
        { h3: '3. Donner le code avant réception' },
        { p: "Le code débloque définitivement les fonds. Une fois transmis, il n'y a plus de recours." },
      ],
    },
  ],
};

export const guideVendeur = {
  slug: 'guides/vendre',
  title: 'Vendre sur la MarketPlace',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Publier une annonce, fixer ses frais de livraison, être payé, et éviter les manquements qui entraînent un bannissement.",
  sections: [
    {
      id: 'publier',
      title: 'Publier un produit',
      blocks: [
        {
          steps: [
            "Depuis le fil, appuyez sur le bouton « + » au centre de la barre inférieure.",
            "Choisissez « Vendre un produit ».",
            "Renseignez le nom, la description, le prix, la devise et la catégorie.",
            "Ajoutez au moins une photographie réelle du produit — pas une image trouvée en ligne.",
            "Indiquez les frais de livraison par zone, puis publiez.",
          ],
        },
        { note: "Votre annonce est analysée avant diffusion, d'abord automatiquement par VndachAI. Une annonce incomplète ou douteuse met plus longtemps à paraître." },
      ],
    },
    {
      id: 'audience',
      title: 'Choisir qui voit votre annonce',
      blocks: [
        { p: "Par défaut, une annonce est diffusée auprès de vos abonnés et des comptes situés dans votre région. C'est généralement le meilleur réglage : un acheteur proche est un acheteur qui commande." },
        { p: "Vous pouvez élargir ou restreindre cette diffusion au moment de la publication, ou définir une valeur par défaut une fois pour toutes." },
        { path: "Paramètres → Publications → Valeurs par défaut (audience, zone cible, réactions masquées)." },
      ],
    },
    {
      id: 'livraison',
      title: 'Frais et délai de livraison',
      blocks: [
        {
          list: [
            "Les frais de livraison doivent être inclus dans le prix affiché : vous ne pouvez rien réclamer de plus à la remise du colis.",
            "Vous pouvez fixer un tarif différent par zone de votre pays.",
            "Le délai maximum est de trois jours. Au-delà, la transaction est annulée et l'acheteur remboursé.",
          ],
        },
        { p: "Si les frais calculés pour une zone vous semblent erronés, vous pouvez introduire une réclamation auprès du service d'arbitrage en fournissant des preuves." },
      ],
    },
    {
      id: 'paiement',
      title: 'Être payé',
      blocks: [
        { p: "Les fonds de l'acheteur sont bloqués en séquestre dès sa commande. Vous les recevez sur votre Mobile Money dans deux cas :" },
        {
          ordered: [
            "l'acheteur confirme la réception et vous communique son code de validation, que vous saisissez dans l'application ;",
            "automatiquement, trois jours après la livraison signalée, si l'acheteur ne conteste pas.",
          ],
        },
        { warning: "Ne demandez jamais le code avant d'avoir remis le produit. Cette pratique est signalée par les acheteurs et entraîne une sanction." },
      ],
    },
    {
      id: 'litige',
      title: 'En cas de litige',
      blocks: [
        { p: "Conservez systématiquement : des photographies du colis avant expédition, le reçu du livreur, et les échanges avec l'acheteur dans la messagerie de l'application." },
        { p: "Ces éléments sont examinés par le service d'arbitrage. Si la mauvaise foi de l'acheteur est établie, les fonds vous sont débloqués et son compte peut être sanctionné." },
      ],
    },
    {
      id: 'bannissement',
      title: 'Ce qui entraîne un bannissement immédiat',
      blocks: [
        {
          list: [
            'produits de santé et médicaments ;',
            'produits cosmétiques dangereux, notamment les dépigmentants non homologués ;',
            'contrefaçons manifestes ;',
            'armes, drogues, substances interdites ;',
            'contenus pornographiques, prostitution, traite humaine, vente d\'organes ;',
            'incitation répétée à conclure hors de la plateforme.',
          ],
        },
      ],
    },
    {
      id: 'informel',
      title: 'Vous vendez sans NINEA ni RCCM',
      blocks: [
        { p: "C'est prévu. Le vendeur informel donne mandat à Vndach pour générer en son nom un reçu d'achat non professionnel à chaque transaction. Ce reçu matérialise l'opération et sert de justificatif comptable." },
        { p: "Ce mandat ne vous confère pas la qualité de commerçant et ne préjuge pas de vos obligations fiscales éventuelles." },
      ],
    },
  ],
};

export const guideCreateur = {
  slug: 'guides/creer',
  title: 'Publier et être récompensé',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Comment fonctionnent les bons d'achat, ce qu'ils permettent, ce qu'ils ne permettent pas, et comment ne pas les perdre.",
  sections: [
    {
      id: 'principe',
      title: 'Le principe',
      blocks: [
        { p: "Vos publications génèrent de l'audience : vues, partages, interactions. Cette audience est convertie en bons d'achat, inscrits sur votre tableau de bord." },
        { warning: "Un bon d'achat n'est pas de l'argent. Il ne peut ni être retiré, ni converti, ni transféré. Il sert uniquement à acheter sur la MarketPlace de Vndach." },
      ],
    },
    {
      id: 'validite',
      title: '90 jours pour les utiliser',
      blocks: [
        { p: "Chaque bon est valable quatre-vingt-dix jours à compter de son inscription. Passé ce délai, il disparaît sans compensation possible." },
        { p: "Les bons les plus anciens sont dépensés en premier lors d'un achat, ce qui limite les pertes." },
        { path: "Profil → Portefeuille → Mes bons d'achat — pour voir les dates d'expiration." },
      ],
    },
    {
      id: 'perdre',
      title: 'Comment on perd ses bons',
      blocks: [
        {
          list: [
            "audience artificielle : robots, fermes à clics, achats de vues, automatisation ;",
            "contenu en infraction : contrefaçon, propos haineux, nudité, violation de droits d'auteur ;",
            "tentative de transfert de bons vers un autre compte, qui entraîne en plus la suspension des deux profils ;",
            "expiration à quatre-vingt-dix jours ;",
            "suppression du compte.",
          ],
        },
      ],
    },
    {
      id: 'brouillons',
      title: 'Préparer ses publications',
      blocks: [
        { p: "Une publication commencée et non terminée est enregistrée automatiquement en brouillon sur votre appareil. Vous la retrouvez et la reprenez quand vous voulez." },
        { path: "Paramètres → Publications → Brouillons." },
        { note: "Les brouillons restent sur l'appareil où ils ont été écrits. Ils ne sont pas synchronisés et disparaissent si vous désinstallez l'application." },
      ],
    },
  ],
};

export const guideConfidentialite = {
  slug: 'guides/confidentialite',
  title: 'Régler sa confidentialité',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Tous les réglages qui déterminent qui voit votre profil, qui peut vous contacter et ce que les autres apprennent de votre activité, avec le chemin exact pour chacun.",
  sections: [
    {
      id: 'profil',
      title: 'Qui voit votre profil',
      blocks: [
        { p: "Un compte privé n'est visible que de vos abonnés. Les autres voient votre nom et votre photographie, mais ni vos publications, ni vos abonnés, ni vos stories. Ils peuvent demander à vous suivre, et vous acceptez ou refusez." },
        { path: "Paramètres → Confidentialité → Compte privé." },
        { p: "Indépendamment de cela, vous pouvez masquer certains éléments de votre profil." },
        {
          table: {
            head: ['Ce que vous masquez', 'Où'],
            rows: [
              ['Votre biographie', 'Paramètres → Confidentialité → Visibilité du profil'],
              ['Votre liste d\'abonnés', 'Paramètres → Confidentialité → Visibilité du profil'],
              ['Votre liste d\'abonnements', 'Paramètres → Confidentialité → Visibilité du profil'],
              ['Votre statut en ligne', 'Paramètres → Confidentialité → Statut en ligne'],
              ['Votre position', 'Paramètres → Confidentialité → Localisation'],
            ],
          },
        },
        { note: "Le statut en ligne est réciproque : si vous masquez le vôtre, vous ne verrez plus celui des autres." },
      ],
    },
    {
      id: 'contact',
      title: 'Qui peut vous contacter',
      blocks: [
        { p: "Vous pouvez restreindre les messages et les appels aux comptes qui vous suivent, à ceux que vous suivez, ou n'en accepter aucun." },
        {
          list: [
            "**Messages** : Paramètres → Confidentialité → Qui peut vous écrire. Les conversations déjà commencées continuent de fonctionner, sauf si vous en décidez autrement.",
            "**Appels** : Paramètres → Confidentialité → Appels audio et vidéo. Vous pouvez aussi refuser la vidéo tout en acceptant l'audio, et faire taire les appels de comptes inconnus.",
          ],
        },
      ],
    },
    {
      id: 'interactions',
      title: 'Commentaires, mentions et partages',
      blocks: [
        {
          table: {
            head: ['Réglage', 'Chemin'],
            rows: [
              ['Qui peut commenter vos publications', 'Paramètres → Confidentialité → Commentaires'],
              ['Masquer des mots dans les commentaires', 'Paramètres → Confidentialité → Commentaires → Mots masqués'],
              ['Qui peut vous mentionner', 'Paramètres → Confidentialité → Mentions'],
              ['Autoriser ou non le repost, les réponses, le téléchargement', 'Paramètres → Confidentialité → Partage'],
              ['Qui peut répondre à vos stories', 'Paramètres → Confidentialité → Stories'],
              ['Voir une story sans apparaître dans les vues', 'Paramètres → Confidentialité → Stories'],
            ],
          },
        },
        { p: "Un commentaire contenant un mot que vous avez masqué n'est pas supprimé : il reste visible de son auteur seul, qui n'est pas informé du filtrage. C'est volontaire — cela évite l'escalade." },
      ],
    },
    {
      id: 'comptes',
      title: 'Bloquer, mettre en sourdine',
      blocks: [
        {
          list: [
            "**Sourdine** : vous ne voyez plus les publications d'un compte, mais il ne le sait pas et peut toujours vous contacter.",
            "**Blocage** : plus aucun contact possible dans les deux sens.",
          ],
        },
        { path: "Paramètres → Confidentialité → Comptes bloqués / Comptes en sourdine." },
      ],
    },
    {
      id: 'donnees',
      title: 'Vos données',
      blocks: [
        {
          table: {
            head: ['Action', 'Chemin'],
            rows: [
              ['Voir ce que vous avez consulté', 'Paramètres → Historique de vues'],
              ['Effacer cet historique', 'Paramètres → Historique de vues → Effacer'],
              ['Gérer les sujets suivis et les contenus rejetés', 'Paramètres → Centres d\'intérêt'],
              ['Voir les appareils connectés', 'Paramètres → Sécurité → Sessions'],
              ['Supprimer votre compte', 'Paramètres → Sécurité → Supprimer mon compte'],
            ],
          },
        },
        { note: "Effacer votre historique de consultation ne modifie pas les compteurs de vues des publications : ils appartiennent à leurs auteurs." },
      ],
    },
  ],
};

export const guideData = {
  slug: 'guides/donnees-mobiles',
  title: 'Maîtriser sa consommation de données',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Vndach est conçu pour fonctionner avec un forfait limité. Voici les quatre réglages qui déterminent ce que l'application télécharge, et ce qu'ils économisent réellement.",
  sections: [
    {
      id: 'constat',
      title: 'Ce qui consomme',
      blocks: [
        {
          table: {
            head: ['Élément', 'Poids approximatif'],
            rows: [
              ['Une photographie', '100 à 500 Ko'],
              ['Une minute de vidéo', '5 à 15 Mo'],
              ['Une minute d\'appel audio', 'environ 500 Ko'],
              ['Une minute d\'appel vidéo', '5 à 10 Mo'],
              ['Une heure de navigation sans vidéo', '10 à 30 Mo'],
            ],
          },
        },
      ],
    },
    {
      id: 'lecture',
      title: '1. La lecture automatique des vidéos',
      blocks: [
        { p: "Par défaut, les vidéos du fil ne démarrent seules qu'en Wi-Fi. C'est le réglage le plus important : une vidéo qui se lance toute seule à chaque passage consomme sans que vous l'ayez demandé." },
        { path: "Paramètres → Lecture automatique." },
        { p: "Trois choix : jamais, en Wi-Fi uniquement, ou toujours. En mode « jamais », les vidéos restent accessibles d'un appui." },
      ],
    },
    {
      id: 'medias',
      title: '2. Le téléchargement des médias reçus',
      blocks: [
        { p: "Dans les conversations, une photographie ou une vidéo reçue reste une vignette tant que vous ne l'ouvrez pas. Rien n'est téléchargé sans votre appui." },
        { path: "Paramètres → Téléchargement des médias." },
        { p: "Vous pouvez régler séparément les photographies et les vidéos, et choisir le mode Wi-Fi pour n'automatiser que lorsque c'est gratuit." },
      ],
    },
    {
      id: 'economiseur',
      title: '3. L\'économiseur de données',
      blocks: [
        { p: "Il plafonne la qualité des vidéos et désactive le préchargement, même en Wi-Fi. Utile si vous partagez une connexion ou si le réseau est lent." },
        { path: "Paramètres → Lecture automatique → Économiseur de données." },
      ],
    },
    {
      id: 'notifications',
      title: '4. Les notifications',
      blocks: [
        { p: "Les notifications consomment peu, mais elles réveillent l'appareil et déclenchent des synchronisations. Les restreindre allonge l'autonomie autant qu'elle économise des données." },
        { path: "Paramètres → Notifications, puis Par réseau et Ne pas déranger." },
      ],
    },
  ],
};

export const guideSignaler = {
  slug: 'guides/signaler',
  title: 'Signaler un problème',
  category: 'Guides',
  updated: '9 octobre 2026',
  summary:
    "Contenu choquant, arnaque, harcèlement, compte piraté : à qui s'adresser, comment, et ce qui se passe ensuite.",
  sections: [
    {
      id: 'contenu',
      title: 'Un contenu ou un compte',
      blocks: [
        {
          steps: [
            "Ouvrez la publication, le profil ou la conversation.",
            "Appuyez sur le menu « … ».",
            "Choisissez « Signaler » et le motif le plus proche.",
            "Précisez si nécessaire : un signalement détaillé est traité plus vite.",
          ],
        },
        { p: "Le signalement est anonyme. La personne signalée n'apprend pas qui l'a signalée." },
      ],
    },
    {
      id: 'arnaque',
      title: "Une tentative d'arnaque",
      blocks: [
        { p: "Signalez immédiatement tout vendeur qui vous propose de payer en dehors de l'application, de passer par un autre canal, ou qui réclame le code de validation avant la livraison." },
        { warning: "N'envoyez jamais d'argent sur un Mobile Money personnel. La plateforme ne peut rien récupérer d'un transfert direct." },
      ],
    },
    {
      id: 'litige',
      title: 'Un litige sur une commande',
      blocks: [
        { p: "Un litige ouvert depuis l'application est examiné par le service d'arbitrage, qui interroge les deux parties. Préparez vos preuves : photographies, échanges, reçu du livreur." },
        { path: "Profil → Mes commandes → la commande → Ouvrir un litige." },
      ],
    },
    {
      id: 'compte',
      title: 'Un compte piraté',
      blocks: [
        {
          steps: [
            "Changez votre mot de passe depuis Paramètres → Sécurité.",
            "Déconnectez les autres appareils depuis Paramètres → Sécurité → Sessions.",
            "Vérifiez que votre numéro de téléphone et votre adresse e-mail n'ont pas été modifiés.",
            "Si vous ne pouvez plus accéder au compte, écrivez au support depuis l'adresse e-mail associée.",
          ],
        },
      ],
    },
    {
      id: 'urgence',
      title: 'Une situation urgente',
      blocks: [
        { warning: "Si une personne est en danger immédiat, contactez d'abord les services d'urgence. Un signalement dans l'application ne déclenche pas d'intervention sur place." },
        { p: "Les contenus impliquant un mineur ou une menace crédible contre une personne sont traités en priorité absolue et signalés aux autorités compétentes." },
      ],
    },
  ],
};

export const guides = [
  guideAcheteur,
  guideVendeur,
  guideCreateur,
  guideConfidentialite,
  guideData,
  guideSignaler,
];
