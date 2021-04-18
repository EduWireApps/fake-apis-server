import express from "express";
import bodyParser from "body-parser";
import users from "./db/ecoledirecte/users";
import errors from "./db/ecoledirecte/errors";
const router = express.Router();

router.use(bodyParser.text());

const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

router.get("/", (req, res) => {
  // const data = {
  //   data: "ecoledirecte",
  // };
  // res.json(data);
  // res.send(users);
  res.send(errors);
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

export default router;
