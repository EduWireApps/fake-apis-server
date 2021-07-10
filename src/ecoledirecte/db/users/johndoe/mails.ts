const toBase64 = (str: string) => Buffer.from(str).toString("base64");

const mailsResponse = {
  classeurs: [
    {
      id: 523,
      libelle: "Grand oral",
    },
  ],
  messages: {
    received: [
      {
        id: 85090,
        mtype: "received",
        read: true,
        idDossier: -1,
        idClasseur: 0,
        transferred: false,
        answered: false,
        to_cc_cci: "to",
        brouillon: false,
        subject: "Utilisez yNotes plutôt que Ecole Directe",
        content: toBase64(`
        Chers élèves, chère équipe pédagogique,

En tant que ministre de l'Education Nationale, il me tient à coeur de me tenir au courant des dernières innovations dans le milieu pédagogique. De ce fait, je m'informe très régulièrement par le biais des réseaux sociaux et les journaux. J'ai découvert en regardant la très intéressante émission Underscore, un projet "Libre de droit" (où les codes sources sont libres de modification et de consultation) appelé yNotes. De jeunes étudiants lassés des mornes interfaces proposées par les prestataires EcoleDirecte et Pronote ont décidé de recréer une application haute en couleur et avec de nombreuses fonctionnalités supplémentaires.

Après avoir forké le repo et débogué le projet avec mes compétences - ou skills - de hacker, j'ai pu tester l'application. Je me suis assuré qu'aucune requête ne permettait la récolte des données personnelles. Et devinez quoi ? Cette application est on ne peut plus sécurisée.

Ainsi après vous avoir concédé gentiment vos baccalauréats et débarassé de vos épreuves, faites-moi le modeste plaisir de télécharger cette application. 
Elle est disponible sur toutes les terminaux (et même sur vos ordinateurs). En tant que développeur full stack - oui je ne vous dis pas tout - je suis très impressionné par la qualité de l'application. 

Cordialement,

J-M. Blanquer

PS: Ah heu et vive la France pardon`),
        date: "2021-07-06 21:41:44",
        to: [],
        files: [],
        from: {
          name: "M Michel BLANQUER",
          nom: "BLANQUER",
          prenom: "Michel",
          particule: "",
          civilite: "M",
          role: "P",
          listeRouge: false,
          id: 129,
          read: true,
          fonctionPersonnel: "",
        },
      },
      {
        id: 85078,
        mtype: "received",
        read: true,
        idDossier: -1,
        idClasseur: 0,
        transferred: false,
        answered: true,
        to_cc_cci: "to",
        brouillon: false,
        subject: "Adieu !",
        content: toBase64(`
        Cher élèves,
Ce messaje était sensé être un mail d'adieu, mais je suis null à ça.
Je sui très fier d'avoir été votre professeure de françai ces deux dernière anné et repris le flambo (ou flamblot flemme de verifier) pour la philo cet année.
Vous aver fait de nombreux progrès don je ne peux que vous félicitée. Jeremieu pour ta préstence en classe, David pour ton karisme, Antouane pour me corriger lor de mes faute, Natasha pour tes efforts, et les autres je ne sait pas trop pour quoi vous remerciez mais c'était sympa quand même.

PS : Louis tu a encore oublier ton sac de sport

Salama les khayous !
        `),
        date: "2021-07-06 17:51:24",
        to: [],
        files: [],
        from: {
          name: "M JEAN GAUTIER",
          nom: "GAUTIER",
          prenom: "JEAN",
          particule: "",
          civilite: "M",
          role: "P",
          listeRouge: false,
          id: 128,
          read: true,
          fonctionPersonnel: "",
        },
      },
      {
        id: 85035,
        mtype: "received",
        read: true,
        idDossier: -1,
        idClasseur: 0,
        transferred: false,
        answered: false,
        to_cc_cci: "to",
        brouillon: false,
        subject: "Fin des cours : ne revenez pas svp",
        content: toBase64(`
        Bonjour à tous.

        On ne vous aime pas.

        Alors CASSEZ-VOUS BORDEL
        `),
        date: "2021-07-06 09:39:28",
        to: [],
        files: [],
        from: {
          name: "Mme VALERIE AUCO",
          nom: "AUCO",
          prenom: "VALERIE",
          particule: "",
          civilite: "Mme",
          role: "A",
          listeRouge: true,
          id: 19,
          read: true,
          fonctionPersonnel: "",
        },
      },
      {
        id: 84976,
        mtype: "received",
        read: true,
        idDossier: -1,
        idClasseur: 0,
        transferred: false,
        answered: false,
        to_cc_cci: "to",
        brouillon: false,
        subject: "Vente de brioche",
        content: toBase64(`Tu n'as pas assez de brioche ? Ca tombe bien on en vend !`),
        date: "2021-07-05 11:37:15",
        to: [],
        files: [],
        from: {
          name: "Mme ANTOINETTE MARIE",
          nom: "ANTOINETTE",
          prenom: "MARIE",
          particule: "",
          civilite: "Mme",
          role: "A",
          listeRouge: false,
          id: 132,
          read: true,
          fonctionPersonnel: "",
        },
      },
      {
        id: 84576,
        mtype: "received",
        read: true,
        idDossier: -1,
        idClasseur: 0,
        transferred: false,
        answered: false,
        to_cc_cci: "to",
        brouillon: false,
        subject: "Résultats du bac (c'est pas terrible)",
        content: toBase64(`Vous êtes tous des incompétents`),
        date: "2021-06-29 14:27:48",
        to: [],
        files: [],
        from: {
          name: "Mme VALERIE AUCO",
          nom: "AUCO",
          prenom: "VALERIE",
          particule: "",
          civilite: "Mme",
          role: "A",
          listeRouge: true,
          id: 19,
          read: true,
          fonctionPersonnel: "",
        },
      },
    ],
    sent: [],
    draft: [],
    archived: [],
  },
  parametrage: {
    isActif: true,
    canParentsLireMessagesEnfants: true,
    destAdmin: false,
    destEleve: false,
    destFamille: false,
    destProf: false,
    destEspTravail: true,
    disabledNotification: false,
    notificationEmailEtablissement: true,
    choixMailNotification: 0,
    autreMailNotification: "",
    mailPro: "",
    mailPerso: "",
    messagerieApiVersion: "v3",
    blackListProfActive: false,
    estEnBlackList: false,
    afficherToutesLesClasses: false,
  },
  pagination: {
    messagesRecusCount: 250,
    messagesEnvoyesCount: 0,
    messagesArchivesCount: 0,
    messagesRecusNotReadCount: 0,
  },
};

const getMail = (id: Number) => {
    return mailsResponse.messages.received.find((e) => e.id === id) ?? null;
};

const mails = { mailsResponse, getMail };

export default mails;
