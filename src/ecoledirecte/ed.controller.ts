import { convertBody, setResponse } from "./utils";
import users from "./db/users";
import errors from "./db/errors";

declare module "express-serve-static-core" {
  interface Request {
    user?: Object;
  }
}

class EdController {
  public index(req, res) {
    res.send("EcoleDirecte");
  }

  public login(req, res) {
    const body = convertBody(req.body);
    const user = users.find((u) => u.account.identifiant == body.identifiant);
    if (user) {
      if (body.motdepasse == user.loginData.password) {
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
  }

  public authMiddleware(req, res, next) {
    if (req.method == "POST") {
      const body = convertBody(req.body);
      if (!body.token) return res.send(errors.login.invalidToken);
      const user = users.find((u) => u.loginData.token == body.token);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.send(errors.login.invalidToken);
      }
    }
  }

  public test(req, res) {
    const body = convertBody(req.body);
    body.user = req.user;
    res.send(body);
  }

  public grades(req, res) {
    const body = convertBody(req.body);
    const data = req.user.grades;
    res.send(setResponse(data, req.user.loginData.token));
  }
}

export default EdController;
