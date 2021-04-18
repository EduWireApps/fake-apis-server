import express from "express";
import bodyParser from "body-parser";
import users from "./db/ecoledirecte/users";
import errors from "./db/ecoledirecte/errors";
const router = express.Router();

declare module "express-serve-static-core" {
  interface Request {
    user?: Object;
  }
}

router.use(bodyParser.text());

const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

router.get("/", (req, res) => {
  res.send("EcoleDirecte");
});

router.post("/login", (req, res) => {
  const data = convertBody(req.body);
  const user = users.find((u) => u.account.identifiant == data.identifiant);
  if (user) {
    if (data.motdepasse == user.loginData.password) {
      const response = {
        code: 200,
        token: user.loginData.token,
        message: "",
        data: {
          accounts: [user.account],
        },
      };
      res.send(response);
    } else {
      res.send(errors.login.password);
    }
  } else {
    res.send(errors.login.loginOrPassword);
  }
});

router.use((req, res, next) => {
  if (req.method == "POST") {
    const data = convertBody(req.body);
    if (!data.token) return res.send(errors.login.invalidToken);
    const user = users.find((u) => u.loginData.token == data.token);
    if (user) {
      req.user = user;
      next();
    } else {
      return res.send(errors.login.invalidToken);
    }
  }
});

router.post("/test", (req, res) => {
  const data = convertBody(req.body);
  data.user = req.user;
  res.send(data);
});

export default router;
