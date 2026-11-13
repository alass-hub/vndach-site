/* ==========================================================================
   Documents juridiques.
   Chaque document est un objet lisible sans connaître React : pour corriger
   un texte, il suffit de modifier la chaîne de caractères correspondante.
   ========================================================================== */

export const cgu = {
  slug: 'cgu',
  title: "Conditions générales d'utilisation",
  category: 'Textes de référence',
  updated: '9 octobre 2026',
  version: '1.0',
  summary:
    "Les présentes conditions régissent l'accès et l'utilisation de Vndach. Elles s'appliquent à tous les utilisateurs : acheteurs, vendeurs, créateurs de contenu et simples visiteurs. En créant un compte, vous les acceptez dans leur intégralité.",
  sections: [
    {
      id: 'preambule',
      title: 'Article 1 — Préambule et objet',
      blocks: [
        { p: "Vndach est une application mobile qui regroupe plusieurs services au sein d'un même compte : une place de marché (MarketPlace), un réseau social, un espace professionnel, un espace d'événements et un portefeuille électronique interne." },
        { p: "Les présentes conditions générales d'utilisation (ci-après « les CGU ») définissent les droits et obligations de l'éditeur de l'application et de ses utilisateurs. Elles constituent un contrat entre vous et l'éditeur." },
        { p: "L'utilisation de Vndach suppose l'acceptation pleine et entière des CGU. Si vous n'acceptez pas l'une de ses stipulations, vous devez renoncer à utiliser le service." },
        { note: "Ces conditions peuvent évoluer. Toute modification substantielle vous sera signalée dans l'application au moins quinze jours avant son entrée en vigueur, et la poursuite de l'utilisation après ce délai vaudra acceptation." },
      ],
    },
    {
      id: 'definitions',
      title: 'Article 2 — Définitions',
      blocks: [
        { p: "Dans les présentes, les termes ci-dessous ont le sens suivant :" },
        {
          list: [
            "**Application** : l'application mobile Vndach, dans toutes ses versions et sur tous ses supports.",
            "**Éditeur** : la personne morale qui exploite l'application et en assume la responsabilité éditoriale.",
            "**Utilisateur** : toute personne physique disposant d'un compte sur l'application.",
            "**Vendeur** : utilisateur qui publie un bien ou un service en vue de sa vente sur la MarketPlace.",
            "**Acheteur** : utilisateur qui acquiert un bien ou un service auprès d'un vendeur.",
            "**Créateur** : utilisateur qui publie des contenus et perçoit, à ce titre, des bons d'achat.",
            "**Bon d'achat** : unité de compte virtuelle, non monétaire, utilisable exclusivement sur la MarketPlace.",
            "**Contenu utilisateur** : tout texte, image, vidéo, son, commentaire ou donnée publié par un utilisateur.",
            "**Réseau** : l'un des espaces de l'application (MarketPlace, Social, Professionnel, Événements).",
          ],
        },
      ],
    },
    {
      id: 'inscription',
      title: 'Article 3 — Inscription, éligibilité et sécurité du compte',
      blocks: [
        { h3: '3.1 Âge minimum' },
        { p: "L'accès aux fonctionnalités de l'application est réservé aux personnes physiques âgées d'au moins treize (13) ans. L'utilisation du service par un mineur demeure placée sous la responsabilité exclusive de son représentant légal, qui est réputé avoir donné son autorisation." },
        { p: "Certaines fonctionnalités, notamment la qualité de vendeur et l'accès au portefeuille, exigent d'être âgé d'au moins dix-huit (18) ans ou d'être émancipé." },
        { h3: '3.2 Exactitude des informations' },
        { p: "L'utilisateur s'engage à fournir des informations exactes, à jour et sincères lors de son inscription, puis à les actualiser en cas de changement. Sont strictement interdits la création de faux profils, l'usurpation d'identité et la création automatisée de comptes multiples." },
        { h3: '3.3 Confidentialité des identifiants' },
        { p: "L'utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toutes les activités réalisées depuis son compte. Il doit signaler sans délai toute utilisation non autorisée." },
        { path: "Profil → Paramètres → Sécurité → Sessions actives — pour consulter les appareils connectés et en déconnecter un." },
        { h3: '3.4 Vérification d\'identité' },
        { p: "L'éditeur peut à tout moment demander la vérification de l'identité, de l'âge et du numéro de téléphone d'un utilisateur, notamment avant l'activation des fonctions de vente ou de retrait. Cette vérification peut nécessiter la transmission d'une pièce d'identité et d'une photographie du titulaire." },
      ],
    },
    {
      id: 'role',
      title: 'Article 4 — Rôle de Vndach sur la MarketPlace',
      blocks: [
        { warning: "Vndach agit exclusivement en qualité d'intermédiaire technique. Le contrat de vente est conclu directement entre l'acheteur et le vendeur. Vndach n'est ni vendeur, ni propriétaire, ni distributeur, ni importateur des produits proposés." },
        { p: "La MarketPlace est un espace de mise en relation ouvert aux vendeurs formels comme informels. L'éditeur fournit l'infrastructure technique, le système de paiement séquestré et un service d'arbitrage ; il ne garantit ni la qualité, ni la conformité, ni la disponibilité des biens et services proposés par les tiers." },
        { p: "L'éditeur décline toute responsabilité civile ou pénale liée aux produits vendus par des tiers sur la MarketPlace, dans les limites permises par la loi applicable." },
      ],
    },
    {
      id: 'vendeur',
      title: 'Article 5 — Obligations du vendeur',
      blocks: [
        { h3: '5.1 Contenu de l\'annonce' },
        { p: "Le vendeur publie son produit avec l'ensemble des informations nécessaires : nom du produit, description détaillée, prix, devise, catégorie, et au moins une image ou vidéo authentique du bien proposé." },
        { p: "Après vérification et analyse de la publication, assurée en premier lieu par VndachAI, l'annonce devient visible dans le fil des autres utilisateurs. Par défaut, elle est diffusée auprès des comptes qui suivent le vendeur et des comptes situés dans la même région, sauf si le vendeur a lui-même défini une audience et une zone cible différentes." },
        { path: "Lors de la publication → Paramètres → Audience et Zone cible. Les valeurs par défaut se règlent dans Paramètres → Publications → Valeurs par défaut." },
        { h3: '5.2 Transparence et loyauté' },
        { p: "La fiche produit doit être claire, complète et exacte. Toute présentation de nature à induire l'acheteur en erreur est susceptible de recevoir la qualification de tromperie sur la marchandise et expose son auteur à des sanctions contractuelles et légales." },
        { h3: '5.3 Modification et retrait' },
        { p: "Le vendeur peut demander la modification de sa publication tant qu'aucun utilisateur ne l'a ajoutée à son panier. Lorsqu'un vendeur supprime son produit, celui-ci est automatiquement retiré de tous les paniers où il figurait." },
        { h3: '5.4 Vendeurs informels' },
        { p: "Le vendeur informel reconnaît ne pas disposer de numéro d'identification fiscale (NINEA ou RCCM). Il donne expressément mandat à Vndach pour générer en son nom un reçu d'achat non professionnel lors de chaque transaction. Ce reçu constitue le justificatif comptable exclusif matérialisant l'opération." },
        { p: "Ce mandat ne confère au vendeur informel aucune qualité de commerçant et n'emporte aucune reconnaissance de statut fiscal. Il appartient au vendeur de se conformer à ses obligations déclaratives éventuelles." },
        { h3: '5.5 Propriété de la marchandise' },
        { p: "Le vendeur demeure propriétaire légal de sa marchandise tant que la transaction n'est pas validée. Si l'acheteur refuse le colis à la livraison, le produit doit lui être immédiatement restitué dans son état d'origine." },
      ],
    },
    {
      id: 'interdits-vente',
      title: 'Article 6 — Produits et pratiques interdits à la vente',
      blocks: [
        { p: "Le vendeur encourt le bannissement immédiat et définitif de la plateforme, sans préavis ni indemnité, s'il met en vente ou tente de mettre en vente :" },
        {
          list: [
            "des produits de santé, médicaments, dispositifs médicaux ou compléments présentés comme thérapeutiques ;",
            "des produits cosmétiques dangereux ou contenant des substances interdites, notamment les produits de dépigmentation non homologués ;",
            "des contrefaçons manifestes, notamment de marques de luxe, de produits technologiques ou de pièces détachées ;",
            "des armes, munitions, explosifs, drogues, substances psychotropes ou toute substance dont la cession est prohibée ;",
            "des contenus à caractère pornographique ou tout service de nature sexuelle ;",
            "des espèces animales protégées, des organes humains, ou tout bien issu d'un trafic ;",
            "des documents administratifs, diplômes, identifiants ou données personnelles de tiers ;",
            "des biens volés ou dont l'origine licite ne peut être justifiée.",
          ],
        },
        { warning: "Tout acte de prostitution, de traite d'êtres humains ou de vente d'organes constaté sur la plateforme fait l'objet d'un signalement immédiat aux autorités compétentes, en sus de la fermeture du compte." },
      ],
    },
    {
      id: 'paiement',
      title: 'Article 7 — Paiement, séquestre et reversement',
      blocks: [
        { p: "Afin de sécuriser la transaction, les fonds dus au vendeur sont bloqués en séquestre dès le paiement de l'acheteur. Le vendeur ne perçoit aucune somme tant que la livraison n'est pas confirmée." },
        { p: "Le reversement effectif sur le compte Mobile Money du vendeur est déclenché dans l'un des deux cas suivants :" },
        {
          ordered: [
            "l'acheteur confirme physiquement la réception du produit sans réserve dans l'application, puis communique au vendeur le code de validation permettant le déblocage des fonds ;",
            "à l'expiration d'un délai automatique de trois (3) jours à compter de la livraison signalée, sans contestation de l'acheteur.",
          ],
        },
        { note: "Le code de validation est la clé du système. Il ne doit jamais être communiqué avant d'avoir reçu et vérifié le produit. Un vendeur qui réclame le code avant la remise du colis commet une tentative de fraude et doit être signalé." },
      ],
    },
    {
      id: 'livraison',
      title: 'Article 8 — Livraison',
      blocks: [
        { p: "Le vendeur inclut obligatoirement les frais de livraison dans le prix affiché lors de la publication. Il peut définir des tarifs différents selon les zones de son pays." },
        { p: "Le délai maximum de livraison est de trois (3) jours. Au-delà, la transaction est automatiquement annulée et les fonds sont restitués à l'acheteur." },
        { warning: "Les frais de livraison étant inclus dans le montant versé à la commande, il est formellement interdit de réclamer un paiement complémentaire à l'acheteur au moment de la remise du colis." },
        { p: "Si une erreur affecte le calcul des frais de livraison dans les zones renseignées par le vendeur, celui-ci peut introduire une réclamation auprès du service d'arbitrage en produisant des preuves claires." },
      ],
    },
    {
      id: 'acheteur',
      title: "Article 9 — Droits et obligations de l'acheteur",
      blocks: [
        { h3: '9.1 Parcours sécurisé' },
        { p: "Pour bénéficier de la protection de la plateforme et pouvoir utiliser ses bons d'achat, l'acheteur doit impérativement finaliser sa commande et valider son paiement au sein de l'interface Vndach. L'utilisation des bons d'achat est techniquement impossible en dehors de ce parcours." },
        { h3: '9.2 Droit à la conformité' },
        { p: "L'acheteur a le droit de recevoir un produit exactement conforme à la description et aux photographies de l'annonce. Si le produit reçu est cassé, défectueux ou contrefait, il peut le refuser immédiatement et s'abstenir de communiquer le code de validation : la transaction est alors annulée de plein droit." },
        { h3: '9.3 Droit de rétractation' },
        { p: "Conformément à la législation applicable au commerce électronique, l'acheteur dispose d'un délai de sept (7) jours calendaires à compter de la réception du colis pour retourner le produit sans avoir à se justifier." },
        { p: "Le produit doit être retourné neuf, non utilisé et dans son emballage d'origine. Les frais de retour physique sont à la charge de l'acheteur. Après réception conforme constatée par le vendeur, Vndach recrédite l'intégralité des bons d'achat utilisés sur le compte virtuel de l'acheteur." },
        { h3: '9.4 Garantie des fonds' },
        { p: "Tant que l'acheteur n'a pas validé la livraison, le vendeur ne perçoit aucune somme. Cette garantie constitue la contrepartie essentielle de l'utilisation du parcours de paiement intégré." },
      ],
    },
    {
      id: 'hors-plateforme',
      title: 'Article 10 — Interdiction des transactions hors plateforme',
      blocks: [
        { p: "Le vendeur s'interdit formellement d'inciter, de suggérer ou d'inviter un acheteur rencontré sur la plateforme à finaliser le paiement ou la livraison en dehors de l'application, notamment par une autre application, un appel téléphonique, un transfert d'argent de compte à compte ou un paiement en espèces." },
        { h3: '10.1 Conséquences pour le vendeur' },
        {
          list: [
            "perte du bénéfice de la garantie de paiement de l'agrégateur ;",
            "absence de toute rétrocession de fonds ou compensation financière pour cette vente ;",
            "responsabilité civile, fiscale et pénale assumée seule, notamment au titre de la livraison, des vices cachés et de la non-conformité.",
          ],
        },
        { h3: "10.2 Conséquences pour l'acheteur" },
        {
          list: [
            "l'acheteur agit à ses risques et périls : en cas d'escroquerie, de vol, de colis non livré ou de produit défectueux, le service client refusera d'intervenir et aucun litige ne sera ouvert ;",
            "aucun bon d'achat ne pourra être restitué, recrédité ou converti ;",
            "la plateforme ne remboursera jamais une somme envoyée directement sur le Mobile Money personnel d'un vendeur.",
          ],
        },
        { h3: '10.3 Devoir de signalement' },
        { p: "Pour préserver la sécurité de la communauté, l'acheteur s'engage à signaler immédiatement au support tout vendeur lui proposant de « passer en direct », de payer par un autre moyen ou de finaliser la vente sur une autre plateforme." },
        { path: "Profil du vendeur → menu « … » → Signaler le compte." },
      ],
    },
    {
      id: 'retours-litiges',
      title: 'Article 11 — Retours, litiges et arbitrage',
      blocks: [
        { p: "L'acheteur peut demander le retour d'un produit dans un délai d'une semaine suivant sa réception. La demande est examinée par le service d'arbitrage, qui interroge les deux parties. Le vendeur est tenu de participer à cette procédure." },
        { p: "Le vendeur peut produire tout élément de preuve utile : photographies du colis avant expédition, reçu du livreur, échanges de messages. Si la mauvaise foi de l'acheteur est établie, la plateforme débloque les fonds au profit du vendeur et peut sanctionner le compte fautif." },
        { p: "Les décisions d'arbitrage sont prises au regard des éléments communiqués par les parties. Elles ne privent aucune partie de son droit de saisir les juridictions compétentes." },
      ],
    },
    {
      id: 'contenus',
      title: 'Article 12 — Contenus utilisateur et licence',
      blocks: [
        { h3: '12.1 Propriété' },
        { p: "L'utilisateur conserve la pleine et entière propriété des textes, images, vidéos, commentaires et médias qu'il publie." },
        { h3: '12.2 Licence accordée' },
        { p: "En publiant un contenu, l'utilisateur concède à l'éditeur une licence gratuite, non exclusive, mondiale et pour la durée légale des droits d'auteur, aux fins d'héberger, reproduire, afficher, adapter et distribuer ce contenu dans le strict cadre du fonctionnement, de l'amélioration et de la promotion du service." },
        { p: "Cette licence prend fin lorsque l'utilisateur supprime son contenu, sous réserve des copies techniques de sauvegarde et des contenus déjà repartagés par d'autres utilisateurs." },
        { h3: '12.3 Garantie' },
        { p: "L'utilisateur garantit disposer de tous les droits nécessaires sur les contenus qu'il publie et répond seul de toute réclamation d'un tiers à ce titre." },
      ],
    },
    {
      id: 'conduite',
      title: 'Article 13 — Règles de conduite et contenus interdits',
      blocks: [
        { p: "L'utilisateur s'interdit formellement de publier, diffuser ou transmettre tout contenu qui :" },
        {
          list: [
            "est contraire aux lois et règlements en vigueur au Sénégal ainsi qu'aux principes du droit OHADA ;",
            "incite à la haine, à la violence, au racisme, au tribalisme ou à la discrimination religieuse, de genre ou de handicap ;",
            "présente un caractère diffamatoire, injurieux, obscène, pornographique ou portant atteinte à la dignité humaine ;",
            "met en scène, sexualise ou met en danger un mineur, sous quelque forme que ce soit ;",
            "diffuse de fausses nouvelles de nature à troubler l'ordre public ou à porter atteinte à des tiers ;",
            "porte atteinte aux droits de propriété intellectuelle, au droit à l'image ou à la vie privée d'autrui ;",
            "contient des virus, des scripts malveillants ou des liens de hameçonnage ;",
            "encourage l'automutilation, le suicide ou les troubles du comportement alimentaire ;",
            "organise ou facilite une escroquerie, une pyramide financière ou un blanchiment de fonds.",
          ],
        },
      ],
    },
    {
      id: 'moderation',
      title: 'Article 14 — Modération et sanctions',
      blocks: [
        { h3: '14.1 Dispositif' },
        { p: "L'éditeur met en œuvre un dispositif de modération hybride combinant des algorithmes automatisés et une révision humaine, destiné à détecter les manquements aux présentes conditions." },
        { h3: '14.2 Mesures applicables' },
        { p: "Selon la gravité et la répétition des faits, l'éditeur peut masquer un contenu, en restreindre la portée, le supprimer sans préavis, suspendre temporairement un compte ou le clôturer définitivement, sans que l'utilisateur puisse prétendre à une indemnité." },
        { h3: '14.3 Signalement par la communauté' },
        { p: "Tout utilisateur ayant connaissance d'un contenu ou d'un comportement contraire aux présentes conditions est invité à le signaler via le bouton prévu à cet effet. L'équipe de modération s'engage à traiter chaque signalement dans un délai raisonnable." },
        { h3: '14.4 Recours' },
        { p: "L'utilisateur dont le contenu a été retiré ou le compte restreint peut contester la décision auprès du support. La demande est réexaminée par une personne n'ayant pas pris la décision initiale." },
      ],
    },
    {
      id: 'donnees',
      title: 'Article 15 — Données personnelles',
      blocks: [
        { p: "Conformément à la loi n° 2008-12 du 25 janvier 2008 relative à la protection des données à caractère personnel au Sénégal, les données collectées lors de l'utilisation du service sont traitées de manière sécurisée et confidentielle." },
        { p: "L'utilisateur dispose d'un droit d'accès, de rectification, d'opposition, de limitation et de suppression de ses données, exerçable directement depuis les paramètres de l'application ou par demande adressée au responsable de traitement." },
        { p: "Les modalités détaillées figurent dans la politique de confidentialité, qui fait partie intégrante des présentes conditions." },
      ],
    },
    {
      id: 'responsabilite',
      title: 'Article 16 — Responsabilité et disponibilité',
      blocks: [
        { p: "L'éditeur met en œuvre les moyens raisonnables pour assurer la disponibilité du service, sans garantir une accessibilité ininterrompue. Des interruptions peuvent survenir pour maintenance, mise à jour ou en raison de causes extérieures, notamment de défaillances des réseaux de télécommunication." },
        { p: "L'éditeur ne saurait être tenu responsable des dommages indirects, de la perte de données, du manque à gagner ou de l'atteinte à la réputation résultant de l'utilisation ou de l'impossibilité d'utiliser le service." },
      ],
    },
    {
      id: 'resiliation',
      title: 'Article 17 — Durée, suspension et résiliation',
      blocks: [
        { p: "Les présentes conditions s'appliquent pendant toute la durée d'utilisation du service." },
        { p: "L'utilisateur peut à tout moment cesser d'utiliser l'application et demander la suppression de son compte depuis les paramètres. La suppression entraîne l'effacement des données personnelles dans les conditions prévues par la politique de confidentialité, à l'exception de celles dont la conservation est imposée par la loi." },
        { path: "Profil → Paramètres → Sécurité → Supprimer mon compte." },
        { warning: "La suppression du compte entraîne la perte définitive des bons d'achat non utilisés, sans compensation." },
      ],
    },
    {
      id: 'droit',
      title: 'Article 18 — Droit applicable et juridiction',
      blocks: [
        { p: "Les présentes conditions sont régies par le droit sénégalais et, pour les matières qu'ils régissent, par les actes uniformes de l'OHADA." },
        { p: "En cas de différend, les parties s'efforceront de trouver une solution amiable. À défaut d'accord dans un délai de trente (30) jours, le litige sera porté devant les juridictions compétentes de Dakar, sauf disposition légale impérative contraire." },
      ],
    },
  ],
};

export const confidentialite = {
  slug: 'confidentialite',
  title: 'Politique de confidentialité',
  category: 'Textes de référence',
  updated: '9 octobre 2026',
  version: '1.0',
  summary:
    "Cette politique explique quelles données Vndach collecte, pourquoi, combien de temps elles sont conservées, avec qui elles sont partagées, et comment exercer vos droits. Elle est rédigée pour être comprise sans formation juridique.",
  sections: [
    {
      id: 'responsable',
      title: '1. Responsable du traitement',
      blocks: [
        { p: "Le responsable du traitement des données collectées via l'application est l'éditeur de Vndach, dont les coordonnées figurent dans les mentions légales." },
        { p: "Le traitement est effectué conformément à la loi n° 2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel au Sénégal, sous le contrôle de la Commission de protection des données personnelles (CDP)." },
      ],
    },
    {
      id: 'donnees-collectees',
      title: '2. Données collectées',
      blocks: [
        { p: "Nous ne collectons que les données nécessaires au fonctionnement du service." },
        {
          table: {
            head: ['Catégorie', 'Exemples', 'Pourquoi'],
            rows: [
              ['Identité', 'Nom, prénom, pseudonyme, date de naissance, photographie de profil', 'Créer et identifier votre compte'],
              ['Contact', 'Numéro de téléphone, adresse e-mail', 'Vous authentifier, vous notifier, sécuriser le compte'],
              ['Contenus', 'Publications, commentaires, messages, médias', 'Fournir le service demandé'],
              ['Transactions', 'Commandes, montants, statut de livraison, reçus', 'Exécuter les ventes et traiter les litiges'],
              ['Localisation', 'Région ou zone déclarée, position approximative si vous l\'activez', 'Proposer des contenus et vendeurs proches'],
              ['Usage', 'Pages consultées, durée de consultation, interactions', 'Améliorer les recommandations et détecter les abus'],
              ['Technique', 'Modèle d\'appareil, système, version de l\'application, adresse IP', 'Sécurité, diagnostic, prévention de la fraude'],
              ['Vérification', 'Pièce d\'identité et photographie, lorsque requis', 'Vérifier l\'âge et l\'identité des vendeurs'],
            ],
          },
        },
        { note: "La position précise n'est jamais collectée sans votre accord explicite. Vous pouvez la désactiver à tout moment ; les contenus de proximité cessent alors de vous être proposés." },
        { path: "Profil → Paramètres → Confidentialité → Localisation." },
      ],
    },
    {
      id: 'finalites',
      title: '3. Finalités et bases légales',
      blocks: [
        {
          list: [
            "**Exécution du contrat** : création du compte, publication des annonces, mise en relation, paiement séquestré, livraison, service client.",
            "**Obligation légale** : conservation des justificatifs de transaction, réponse aux réquisitions des autorités compétentes, lutte contre le blanchiment.",
            "**Intérêt légitime** : sécurité de la plateforme, prévention de la fraude, amélioration du service, mesure d'audience agrégée.",
            "**Consentement** : localisation précise, notifications promotionnelles, accès au carnet d'adresses.",
          ],
        },
      ],
    },
    {
      id: 'partage',
      title: '4. Partage des données',
      blocks: [
        { p: "Vos données ne sont jamais vendues. Elles peuvent être communiquées aux catégories de destinataires suivantes, dans la stricte mesure du nécessaire :" },
        {
          list: [
            "l'autre partie à une transaction, pour les seules informations utiles à la livraison ;",
            "les prestataires techniques (hébergement, envoi de notifications, paiement Mobile Money), liés par une obligation de confidentialité ;",
            "les autorités administratives et judiciaires, sur réquisition régulière ;",
            "un acquéreur éventuel en cas de cession de l'entreprise, sous réserve du maintien des présentes garanties.",
          ],
        },
      ],
    },
    {
      id: 'conservation',
      title: '5. Durées de conservation',
      blocks: [
        {
          table: {
            head: ['Donnée', 'Durée'],
            rows: [
              ['Compte actif', "Tant que le compte existe"],
              ['Compte supprimé', "Effacement sous 30 jours, sauf obligations légales"],
              ['Données de transaction', "10 ans à compter de la transaction (obligation comptable)"],
              ['Messages', "Tant que la conversation existe, puis effacement à la suppression du compte"],
              ['Stories', '24 heures en ligne, puis archive privée limitée aux 30 dernières'],
              ['Historique de consultation', "Jusqu'à effacement par l'utilisateur"],
              ['Journaux techniques', '12 mois'],
              ['Pièces de vérification d\'identité', "Durée du compte vendeur, puis 5 ans"],
            ],
          },
        },
      ],
    },
    {
      id: 'droits',
      title: '6. Vos droits et comment les exercer',
      blocks: [
        { p: "Vous disposez des droits d'accès, de rectification, d'opposition, de limitation, d'effacement et de portabilité. La plupart s'exercent directement dans l'application, sans formalité." },
        {
          table: {
            head: ['Droit', 'Où l\'exercer'],
            rows: [
              ['Consulter et corriger mes informations', 'Profil → Paramètres → Informations personnelles'],
              ['Voir ce que j\'ai consulté, et l\'effacer', 'Profil → Paramètres → Historique de vues'],
              ['Limiter qui voit mon profil', 'Profil → Paramètres → Confidentialité → Compte privé'],
              ['Limiter qui peut m\'écrire ou m\'appeler', 'Paramètres → Confidentialité → Qui peut vous écrire / Appels'],
              ['Refuser les messages promotionnels', 'Paramètres → Notifications → Email et SMS'],
              ['Supprimer mon compte et mes données', 'Profil → Paramètres → Sécurité → Supprimer mon compte'],
            ],
          },
        },
        { p: "Pour toute demande que l'application ne permet pas de traiter, écrivez au responsable de traitement à l'adresse indiquée dans les mentions légales. Une réponse vous sera apportée dans un délai d'un mois." },
        { note: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la Commission de protection des données personnelles (CDP) du Sénégal." },
      ],
    },
    {
      id: 'securite',
      title: '7. Sécurité',
      blocks: [
        { p: "Les échanges entre l'application et nos serveurs sont chiffrés. Les mots de passe sont stockés sous forme de condensats non réversibles. L'accès aux données de production est restreint aux personnes qui en ont besoin et journalisé." },
        { p: "Aucun système n'est parfaitement sûr. En cas de violation de données susceptible d'engendrer un risque pour vos droits, nous vous en informerons et notifierons l'autorité compétente conformément à la loi." },
      ],
    },
    {
      id: 'mineurs',
      title: '8. Mineurs',
      blocks: [
        { p: "Le service est interdit aux moins de treize ans. Nous ne collectons pas sciemment de données concernant des enfants de moins de treize ans. Si un tel compte est porté à notre connaissance, il est supprimé et ses données effacées." },
        { p: "Les comptes de mineurs de treize à dix-sept ans font l'objet de réglages de confidentialité renforcés par défaut et ne peuvent pas accéder aux fonctions de vente." },
      ],
    },
  ],
};

export const bonsAchat = {
  slug: 'bons-achat',
  title: "Règlement des bons d'achat",
  category: 'Textes de référence',
  updated: '9 octobre 2026',
  version: '1.0',
  summary:
    "Les bons d'achat récompensent l'audience générée par les créateurs. Ce document précise leur nature juridique, leurs conditions d'obtention, d'utilisation et d'expiration. Il doit être lu attentivement : un bon d'achat n'est pas de l'argent.",
  sections: [
    {
      id: 'nature',
      title: "1. Nature du bon d'achat",
      blocks: [
        { p: "Le bon d'achat, ou point de récompense d'audience, désigne une unité de compte virtuelle, exclusive et non monétaire, attribuée par Vndach au créateur en rémunération de ses performances d'audience : vues, partages et interactions." },
        { warning: "Le bon d'achat ne constitue en aucun cas une monnaie fiduciaire, une monnaie électronique, un dépôt bancaire ou un avoir financier. Il n'est adossé à aucun compte bancaire et ne produit aucun intérêt." },
        { p: "Il ne possède aucune existence en dehors de l'application et ne sert qu'à acquérir un bien ou un service disponible sur la MarketPlace." },
      ],
    },
    {
      id: 'non-convertible',
      title: '2. Impossibilité de conversion',
      blocks: [
        { p: "Le créateur reconnaît et accepte expressément qu'il est techniquement et juridiquement impossible de retirer, convertir ou échanger ses bons d'achat contre de l'argent liquide, un virement bancaire ou un transfert Mobile Money depuis la plateforme." },
        { p: "Les bons d'achat ne peuvent être liquidés qu'à travers l'acquisition de biens physiques ou de services réels auprès des vendeurs tiers référencés sur la MarketPlace." },
      ],
    },
    {
      id: 'incessibilite',
      title: '3. Incessibilité',
      blocks: [
        { p: "Chaque bon d'achat est intrinsèquement lié au compte du créateur qui l'a généré. En conséquence :" },
        {
          list: [
            "il est strictement interdit de transférer, donner, vendre ou prêter des bons d'achat à un autre utilisateur ou à un tiers, à titre gratuit comme onéreux ;",
            "toute tentative de transfert de solde entre comptes entraîne la suspension immédiate des profils concernés et la confiscation définitive des bons accumulés.",
          ],
        },
      ],
    },
    {
      id: 'validite',
      title: '4. Durée de validité',
      blocks: [
        { p: "Les bons d'achat ont une durée de vie limitée afin de garantir la fluidité de la trésorerie de la plateforme." },
        {
          list: [
            "chaque bon d'achat est valable quatre-vingt-dix (90) jours à compter de sa date d'inscription sur le tableau de bord du créateur ;",
            "à l'expiration de ce délai, les bons non utilisés s'effacent automatiquement, sans que le créateur puisse réclamer une indemnisation, une compensation ou une réactivation.",
          ],
        },
        { note: "Le tableau de bord indique la date d'expiration de chaque lot de bons. Les bons les plus anciens sont utilisés en premier lors d'un achat." },
        { path: "Profil → Portefeuille → Mes bons d'achat." },
      ],
    },
    {
      id: 'annulation',
      title: '5. Annulation pour fraude ou manquement',
      blocks: [
        { p: "Vndach se réserve le droit d'annuler unilatéralement et sans préavis tout ou partie des bons d'achat d'un créateur si :" },
        {
          list: [
            "les vues ou interactions ont été générées par des procédés artificiels : robots, fermes à clics, achats de vues, systèmes d'automatisation ;",
            "le contenu associé aux vues viole les règles de modération : contrefaçon, propos haineux, nudité, atteinte aux droits d'auteur ;",
            "le compte a servi à contourner les règles de la plateforme, notamment par la création de comptes multiples.",
          ],
        },
      ],
    },
    {
      id: 'utilisation',
      title: '6. Utilisation lors d\'un achat',
      blocks: [
        { p: "Les bons d'achat s'appliquent au moment du paiement, dans l'interface de l'application. Ils peuvent couvrir tout ou partie du montant, frais de livraison inclus. Le solde éventuel est réglé par Mobile Money." },
        { p: "En cas d'annulation ou de retour conforme, les bons utilisés sont recrédités sur le compte du créateur avec leur date d'expiration d'origine. Un bon expiré entre-temps n'est pas réactivé." },
      ],
    },
  ],
};

export const regles = {
  slug: 'regles-communaute',
  title: 'Règles de la communauté',
  category: 'Textes de référence',
  updated: '9 octobre 2026',
  version: '1.0',
  summary:
    "Ces règles disent ce qui est permis et ce qui ne l'est pas sur Vndach. Elles s'appliquent à tout le monde, partout dans l'application : publications, commentaires, messages privés, stories, noms de compte et photographies de profil.",
  sections: [
    {
      id: 'principe',
      title: 'Le principe',
      blocks: [
        { p: "Vndach est un espace où l'on vend, où l'on cherche du travail, où l'on s'informe et où l'on discute. Ces usages n'ont de sens que si chacun peut s'y exprimer sans être harcelé, trompé ou exposé à des contenus qu'il n'a pas demandé à voir." },
        { p: "Les règles ci-dessous sont appliquées de la même façon à tous les comptes, quelle que soit leur audience." },
      ],
    },
    {
      id: 'interdits',
      title: 'Ce qui est interdit',
      blocks: [
        { h3: 'Atteintes aux personnes' },
        {
          list: [
            "harcèlement, intimidation, menaces, incitation à s'en prendre à quelqu'un ;",
            "propos haineux visant l'origine, l'ethnie, la religion, le genre, l'orientation sexuelle ou le handicap ;",
            "publication d'informations privées d'autrui sans son accord : adresse, numéro, documents ;",
            "usurpation d'identité et faux comptes se faisant passer pour une personne ou une organisation.",
          ],
        },
        { h3: 'Protection des mineurs' },
        { p: "Tout contenu mettant en scène un mineur de manière sexualisée, tout comportement de mise en confiance à des fins sexuelles et toute sollicitation d'un mineur entraînent la fermeture immédiate du compte et un signalement aux autorités. Il n'y a ni avertissement, ni recours." },
        { h3: 'Contenus choquants' },
        {
          list: [
            "violence réelle, blessures, cruauté envers les animaux ;",
            "nudité, contenus sexuels explicites ou suggestifs ;",
            "contenus encourageant l'automutilation, le suicide ou les troubles alimentaires.",
          ],
        },
        { h3: 'Tromperie et argent' },
        {
          list: [
            "arnaques, pyramides financières, fausses promesses de gain ;",
            "contrefaçons et produits interdits à la vente ;",
            "manipulation de l'audience : achat de vues, faux avis, comptes automatisés ;",
            "proposition de conclure une vente en dehors de l'application.",
          ],
        },
        { h3: 'Sécurité technique' },
        {
          list: [
            "hameçonnage, liens frauduleux, logiciels malveillants ;",
            "tentative d'accès non autorisé à un compte ou aux systèmes de la plateforme.",
          ],
        },
      ],
    },
    {
      id: 'sanctions',
      title: 'Ce qui se passe en cas de manquement',
      blocks: [
        {
          table: {
            head: ['Situation', 'Mesure habituelle'],
            rows: [
              ['Premier manquement mineur', 'Retrait du contenu et avertissement'],
              ['Manquement répété', 'Réduction de la portée des publications, suspension temporaire'],
              ['Manquement grave', 'Fermeture définitive du compte'],
              ['Infraction pénale', 'Fermeture, conservation des preuves et signalement aux autorités'],
            ],
          },
        },
        { p: "La gravité s'apprécie au regard du préjudice causé, de l'intention et de l'historique du compte. Une décision peut être contestée auprès du support ; elle est alors réexaminée par une personne différente." },
      ],
    },
    {
      id: 'signaler',
      title: 'Comment signaler',
      blocks: [
        { p: "Le signalement est le moyen le plus efficace de faire retirer un contenu. Il est anonyme : la personne signalée n'est pas informée de votre identité." },
        {
          steps: [
            "Ouvrez la publication, le profil ou la conversation concernée.",
            "Appuyez sur le menu « … » en haut à droite.",
            "Choisissez « Signaler », puis le motif le plus proche.",
            "Ajoutez une précision si le motif proposé ne correspond pas exactement.",
          ],
        },
        { note: "En cas de danger immédiat pour une personne, contactez d'abord les services d'urgence. Le signalement dans l'application ne remplace pas une intervention sur place." },
      ],
    },
  ],
};

export const legalDocs = [cgu, confidentialite, bonsAchat, regles];
