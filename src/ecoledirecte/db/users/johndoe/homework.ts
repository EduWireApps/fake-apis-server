const homeworkOverview = {
  "2021-04-26": [
    {
      matiere: "HISTOIRE-GEOGRAPHIE",
      codeMatiere: "HI-GE",
      aFaire: true,
      idDevoir: 16095,
      documentsAFaire: true,
      donneLe: "2021-04-12",
      effectue: false,
      interrogation: false,
      rendreEnLigne: false,
    },
  ],
  "2021-04-27": [
    {
      matiere: "MATHEMATIQUES",
      codeMatiere: "MATHS",
      aFaire: true,
      idDevoir: 16357,
      documentsAFaire: false,
      donneLe: "2021-04-09",
      effectue: false,
      interrogation: false,
      rendreEnLigne: false,
    },
  ],
  "2021-04-29": [
    {
      matiere: "DISCIP. NON LINGUIST",
      codeMatiere: "DNL",
      aFaire: true,
      idDevoir: 16311,
      documentsAFaire: false,
      donneLe: "2021-04-08",
      effectue: false,
      interrogation: false,
      rendreEnLigne: false,
    },
  ],
  "2021-04-30": [
    {
      matiere: "MATHEMATIQUES",
      codeMatiere: "MATHS",
      aFaire: true,
      idDevoir: 16358,
      documentsAFaire: false,
      donneLe: "2021-04-09",
      effectue: false,
      interrogation: false,
      rendreEnLigne: false,
    },
  ],
};

const homeworkDetails = [
  {
    date: "2021-04-26",
    matieres: [
      {
        entityCode: "1D",
        entityLibelle: "Seconde A",
        entityType: "C",
        matiere: "HISTOIRE-GEOGRAPHIE",
        codeMatiere: "HI-GE",
        nomProf: " par Mme MARTIN",
        id: 16095,
        interrogation: false,
        blogActif: false,
        nbJourMaxRenduDevoir: 0,
        aFaire: {
          idDevoir: 16095,
          contenu:
            "PHA+PHN0cm9uZz5BdSBjb250ZW51IGRlIHMmZWFjdXRlO2FuY2UgZHUgdmVuZHJlZGkgOSBhdnJpbCA9Jmd0OyBQUE88L3N0cm9uZz4gJm1kYXNoOyB0b3VzIGxlcyBhcnRpY2xlcyBkZSBqb3VybmF1eCArIGRpYXBvcmFtYSArIGNvbXBsJmVhY3V0ZTttZW50cyBPVSBjaS1kZXNzb3VzPC9wPgo=",
          rendreEnLigne: false,
          donneLe: "2021-04-12",
          effectue: false,
          ressource: "",
          ressourceDocuments: [],
          documents: [
            {
              id: 7001,
              libelle: "Articles journaux + Notes Prof.pdf",
              date: "20210412",
              taille: 35488136,
              type: "FICHIER_CDT",
              signatureDemandee: false,
              signature: {},
            },
          ],
          elementsProg: [],
          liensManuel: [],
          documentsRendus: [],
          contenuDeSeance: {
            contenu: "",
            documents: [],
          },
        },
      },
    ],
  },
  {
    date: "2021-04-27",
    matieres: [
      {
        entityCode: "1_MATHS-4",
        entityLibelle: "1_MATHS-4",
        entityType: "G",
        matiere: "MATHEMATIQUES",
        codeMatiere: "MATHS",
        nomProf: " par M. DUPONT",
        id: 16357,
        interrogation: false,
        blogActif: false,
        nbJourMaxRenduDevoir: 0,
        aFaire: {
          idDevoir: 16357,
          contenu:
            "PHA+RmFpcmUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDY0IHBhZ2UgMTU4ICg8c3Ryb25nPjxlbT51bmlxdWVtZW50IGxlcyBxdWVzdGlvbnMgbiZkZWc7IDEpIGV0IDMpPC9lbT48L3N0cm9uZz4gKS48L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSBuJmRlZzsgNjUgcGFnZSAxNTggKDxlbT48c3Ryb25nPnVuaXF1ZW1lbnQgbGVzIHF1ZXN0aW9ucyBuJmRlZzsgMSkgZXQgNCkgPC9zdHJvbmc+PC9lbT4pLjwvcD4KCjxwPkZhaXJlIGwmIzM5O2V4ZXJjaWNlIG4mZGVnOyA4MCBwYWdlIDE5My48L3A+Cg==",
          rendreEnLigne: false,
          donneLe: "2021-04-09",
          effectue: false,
          ressource: "",
          ressourceDocuments: [],
          documents: [],
          elementsProg: [],
          liensManuel: [],
          documentsRendus: [],
          contenuDeSeance: {
            contenu:
              "PHA+PHN0cm9uZz48dT5Qcm9jaGFpbmUgY2xhc3NlIHZpcnR1ZWxsZTwvdT4gOiBWZW5kcmVkaSAwOS8wNCBkZSAxMGggJmFncmF2ZTsgMTJoLjwvc3Ryb25nPjwvcD4KCjxwPiZuYnNwOzwvcD4KCjxwPkNvcnJlY3Rpb24gZGUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDEyNSBwYWdlIDIwMC48L3A+Cgo8cD5Db3JyZWN0aW9uIGRlIGwmIzM5O2V4ZXJjaWNlIG4mZGVnOyA1NyBwYWdlIDE1OCAoPHN0cm9uZz48ZW0+dW5pcXVlbWVudCBsZXMgcXVlc3Rpb25zIG4mZGVnOyA1IGV0IG4mZGVnOyA2PC9lbT48L3N0cm9uZz4pLjwvcD4KCjxwPkNvcnJlY3Rpb24gZGUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDU4IHBhZ2UgMTU4ICg8c3Ryb25nPjxlbT51bmlxdWVtZW50IGxlcyBxdWVzdGlvbnMgbiZkZWc7IDIgZXQgbiZkZWc7IDQ8L2VtPjwvc3Ryb25nPikuPC9wPgoKPHA+U3VpdGUgZHUgY291cnMgKCBJSSBTdWl0ZXMgZyZlYWN1dGU7b20mZWFjdXRlO3RyaXF1ZXMgKS4gVHJhdmFpbCBlbiBjbGFzc2Ugc3VyIGRlcyBleGVtcGxlcyArIGNvcnJlY3Rpb24uPC9wPgoKPHA+Jm5ic3A7PC9wPgoKPHA+PHU+PHN0cm9uZz5Qb3VyIGxlIDI3LzA0IDwvc3Ryb25nPjwvdT46PC9wPgoKPHA+RmFpcmUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDY0IHBhZ2UgMTU4ICg8c3Ryb25nPjxlbT51bmlxdWVtZW50IGxlcyBxdWVzdGlvbnMgbiZkZWc7IDEpIGV0IDMpPC9lbT48L3N0cm9uZz4gKS48L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSBuJmRlZzsgNjUgcGFnZSAxNTggKDxlbT48c3Ryb25nPnVuaXF1ZW1lbnQgbGVzIHF1ZXN0aW9ucyBuJmRlZzsgMSkgZXQgNCkgPC9zdHJvbmc+PC9lbT4pLjwvcD4KCjxwPkZhaXJlIGwmIzM5O2V4ZXJjaWNlIG4mZGVnOyA4MCBwYWdlIDE5My48L3A+Cgo8cD4mbmJzcDs8L3A+Cgo8cD48dT48c3Ryb25nPlBvdXIgbGUgMzAvMDQ8L3N0cm9uZz48L3U+IDombmJzcDs8L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSZuYnNwOyBCaWxhbiBuJmRlZzsgMiBwYWdlIDIwNy48L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSAmbmJzcDtCaWxhbiBuJmRlZzsgNCBwYWdlIDE3NS48L3A+Cgo8cD48ZW0+PHN0cm9uZz5Qb3VyIGxhIHF1ZXN0aW9uIDUsICZlYWN1dGU7Y3JpcmUgdW4gcHJvZ3JhbW1lIGVuIGxhbmdhZ2UgUHl0aG9uIHN1ciBsYSBjYWxjdWxhdHJpY2UuPC9zdHJvbmc+PC9lbT48L3A+Cg==",
            documents: [],
          },
        },
      },
    ],
  },
  {
    date: "2021-04-29",
    matieres: [
      {
        entityCode: "1_DNL-HG",
        entityLibelle: "1_DNL-HG",
        entityType: "G",
        matiere: "DISCIP. NON LINGUIST",
        codeMatiere: "DNL",
        nomProf: " par Mme LEFEVRE",
        id: 16311,
        interrogation: false,
        blogActif: false,
        nbJourMaxRenduDevoir: 0,
        aFaire: {
          idDevoir: 16311,
          contenu:
            "PHA+PHN0cm9uZz48c3BhbiBzdHlsZT0iY29sb3I6I0ZGMDAwMDsiPjxzcGFuIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGMDA7Ij5DbGFzc2UgdmlydHVlbGxlICZhZ3JhdmU7IDE0aDUwPC9zcGFuPjwvc3Bhbj48L3N0cm9uZz48L3A+Cgo8cD5QYXJ0aWNpcGVyICZhZ3JhdmU7IGxhIHImZWFjdXRlO3VuaW9uIFpvb208YnIgLz4KPGEgaHJlZj0iaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/cT1odHRwczovL3VzMDR3ZWIuem9vbS51cy9qLzc2Mzg0NjY0NDY0P3B3ZCUzRGNEY3hhbUZoVURoU1pVNTFZbGxuWTJKVVJVeEZaejA5JmFtcDtzYT1EJmFtcDtzb3VyY2U9Y2FsZW5kYXImYW1wO3VzZD0yJmFtcDt1c2c9QU92VmF3MjBWYVh2bWZOTklrdGppZjdpZzlkUSI+aHR0cHM6Ly91czA0d2ViLnpvb20udXMvai83NjM4NDY2NDQ2ND9wd2Q9Y0RjeGFtRmhVRGhTWlU1MVlsbG5ZMkpVUlV4Rlp6MDk8L2E+PGJyIC8+CjxiciAvPgpJRCBkZSByJmVhY3V0ZTt1bmlvbiZuYnNwOzogNzYzIDg0NjYgNDQ2NDxiciAvPgpDb2RlIHNlY3JldCZuYnNwOzogODJHWWptPC9wPgo=",
          rendreEnLigne: false,
          donneLe: "2021-04-08",
          effectue: false,
          ressource: "",
          ressourceDocuments: [],
          documents: [],
          elementsProg: [],
          liensManuel: [],
          documentsRendus: [],
          contenuDeSeance: {
            contenu:
              "PHA+PHU+PGVtPlRyYXZhaWwgZW4gYXV0b25vbWllJm5ic3A7PC9lbT48L3U+PC9wPgoKPHA+VG9waWMgMyAoV1cxKSAtIDx1Pkxlc3NvbiAxOiBUaGUgYmVnaW5uaW5nIG9mIFdXMTwvdT48L3A+Cg==",
            documents: [],
          },
        },
      },
    ],
  },
  {
    date: "2021-04-30",
    matieres: [
      {
        entityCode: "1_MATHS-4",
        entityLibelle: "1_MATHS-4",
        entityType: "G",
        matiere: "MATHEMATIQUES",
        codeMatiere: "MATHS",
        nomProf: " par M. DUPONT",
        id: 16358,
        interrogation: false,
        blogActif: false,
        nbJourMaxRenduDevoir: 0,
        aFaire: {
          idDevoir: 16358,
          contenu:
            "PHA+RmFpcmUgbCYjMzk7ZXhlcmNpY2UmbmJzcDsgQmlsYW4gbiZkZWc7IDIgcGFnZSAyMDcuPC9wPgoKPHA+RmFpcmUgbCYjMzk7ZXhlcmNpY2UgJm5ic3A7QmlsYW4gbiZkZWc7IDQgcGFnZSAxNzUuPC9wPgoKPHA+PGVtPjxzdHJvbmc+UG91ciBsYSBxdWVzdGlvbiA1LCAmZWFjdXRlO2NyaXJlIHVuIHByb2dyYW1tZSBlbiBsYW5nYWdlIFB5dGhvbiBzdXIgbGEgY2FsY3VsYXRyaWNlLjwvc3Ryb25nPjwvZW0+PC9wPgo=",
          rendreEnLigne: false,
          donneLe: "2021-04-09",
          effectue: false,
          ressource: "",
          ressourceDocuments: [],
          documents: [],
          elementsProg: [],
          liensManuel: [],
          documentsRendus: [],
          contenuDeSeance: {
            contenu:
              "PHA+PHN0cm9uZz48dT5Qcm9jaGFpbmUgY2xhc3NlIHZpcnR1ZWxsZTwvdT4gOiBWZW5kcmVkaSAwOS8wNCBkZSAxMGggJmFncmF2ZTsgMTJoLjwvc3Ryb25nPjwvcD4KCjxwPiZuYnNwOzwvcD4KCjxwPkNvcnJlY3Rpb24gZGUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDEyNSBwYWdlIDIwMC48L3A+Cgo8cD5Db3JyZWN0aW9uIGRlIGwmIzM5O2V4ZXJjaWNlIG4mZGVnOyA1NyBwYWdlIDE1OCAoPHN0cm9uZz48ZW0+dW5pcXVlbWVudCBsZXMgcXVlc3Rpb25zIG4mZGVnOyA1IGV0IG4mZGVnOyA2PC9lbT48L3N0cm9uZz4pLjwvcD4KCjxwPkNvcnJlY3Rpb24gZGUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDU4IHBhZ2UgMTU4ICg8c3Ryb25nPjxlbT51bmlxdWVtZW50IGxlcyBxdWVzdGlvbnMgbiZkZWc7IDIgZXQgbiZkZWc7IDQ8L2VtPjwvc3Ryb25nPikuPC9wPgoKPHA+U3VpdGUgZHUgY291cnMgKCBJSSBTdWl0ZXMgZyZlYWN1dGU7b20mZWFjdXRlO3RyaXF1ZXMgKS4gVHJhdmFpbCBlbiBjbGFzc2Ugc3VyIGRlcyBleGVtcGxlcyArIGNvcnJlY3Rpb24uPC9wPgoKPHA+Jm5ic3A7PC9wPgoKPHA+PHU+PHN0cm9uZz5Qb3VyIGxlIDI3LzA0IDwvc3Ryb25nPjwvdT46PC9wPgoKPHA+RmFpcmUgbCYjMzk7ZXhlcmNpY2UgbiZkZWc7IDY0IHBhZ2UgMTU4ICg8c3Ryb25nPjxlbT51bmlxdWVtZW50IGxlcyBxdWVzdGlvbnMgbiZkZWc7IDEpIGV0IDMpPC9lbT48L3N0cm9uZz4gKS48L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSBuJmRlZzsgNjUgcGFnZSAxNTggKDxlbT48c3Ryb25nPnVuaXF1ZW1lbnQgbGVzIHF1ZXN0aW9ucyBuJmRlZzsgMSkgZXQgNCkgPC9zdHJvbmc+PC9lbT4pLjwvcD4KCjxwPkZhaXJlIGwmIzM5O2V4ZXJjaWNlIG4mZGVnOyA4MCBwYWdlIDE5My48L3A+Cgo8cD4mbmJzcDs8L3A+Cgo8cD48dT48c3Ryb25nPlBvdXIgbGUgMzAvMDQ8L3N0cm9uZz48L3U+IDombmJzcDs8L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSZuYnNwOyBCaWxhbiBuJmRlZzsgMiBwYWdlIDIwNy48L3A+Cgo8cD5GYWlyZSBsJiMzOTtleGVyY2ljZSAmbmJzcDtCaWxhbiBuJmRlZzsgNCBwYWdlIDE3NS48L3A+Cgo8cD48ZW0+PHN0cm9uZz5Qb3VyIGxhIHF1ZXN0aW9uIDUsICZlYWN1dGU7Y3JpcmUgdW4gcHJvZ3JhbW1lIGVuIGxhbmdhZ2UgUHl0aG9uIHN1ciBsYSBjYWxjdWxhdHJpY2UuPC9zdHJvbmc+PC9lbT48L3A+Cg==",
            documents: [],
          },
        },
      },
    ],
  },
];

const homework = { homeworkOverview, homeworkDetails };

export default homework;
