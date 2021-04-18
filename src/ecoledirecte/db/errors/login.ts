const login = {
  invalidJson: {
    code: 40129,
    token: "",
    message: "Format JSON invalide",
    data: {
      accounts: [],
    },
  },
  password: {
    code: 505,
    token: "",
    message: "Mot de passe invalide !",
    data: {
      accounts: [],
    },
  },
  loginOrPassword: {
    code: 505,
    token: "",
    message: "Identifiant et/ou mot de passe invalide !",
    data: {
      accounts: [],
    },
  },
  invalidToken: {
    code: 520,
    token: "",
    message: "Token invalide !",
    data: {
      accounts: [],
    },
  },
};

export default login;
