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

  public grades(req, res) {
    const data = req.user.grades;
    res.send(setResponse(data, req.user.loginData.token));
  }

  public homework = {
    index(req, res) {
      const data = req.user.homework.homeworkOverview;
      res.send(setResponse(data, req.user.loginData.token));
    },
    get(req, res) {
      const param = req.params.date;
      const homework = req.user.homework.homeworkDetails.find(
        (h) => h.date === param
      );
      if (homework) {
        res.send(setResponse(homework, req.user.loginData.token));
      } else {
        res.send({
          ...errors.homework,
          host: "HTTP40",
          token: req.user.loginData.token,
        });
      }
    },
  };

  public workspaces(req, res) {
    res.send(setResponse(req.user.workspaces, req.user.loginData.token));
  }

  public contacts(req, res) {
    res.send(
      setResponse({ contacts: req.user.contacts }, req.user.loginData.token)
    );
  }

  public schoolLife(req, res) {
    res.send(setResponse(req.user.schoolLife, req.user.loginData.token));
  }

  public agenda(req, res) {
    const getDaysArray = (s, e) => {
      for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
        const weekday = d.getDay() || 7;
        if (![6, 7].includes(weekday)) a.push(new Date(d));
      }
      return a.map((v) => v.toISOString().slice(0, 10));
    };

    const body = convertBody(req.body);
    const from: string = body.dateDebut;
    const to: string = body.dateFin;

    const daylist = getDaysArray(new Date(from), new Date(to));
    const agenda = daylist.map((v) => req.user.agenda(v,v));
    res.send(setResponse(agenda, req.user.loginData.token));
  }

  public mails(req, res) {
    res.send(setResponse(req.user.mails, req.user.loginData.token));
  }
}

export default EdController;
