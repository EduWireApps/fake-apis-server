import convertBody from "./utils";
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
  }

  public authMiddleware(req, res, next) {
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
  }

  public test(req, res) {
    const data = convertBody(req.body);
    data.user = req.user;
    res.send(data);
  }

  public grades(req, res) {}
}

export default EdController;
