import express from "express";
import bodyParser from "body-parser";
import EdController from "./ed.controller";

class EdRouter {
  public path = "/ecoledirecte";
  public router = express.Router();
  public ctrl = new EdController();

  constructor() {
    this.router.use(bodyParser.text());
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get("/", this.ctrl.index);
    this.router.post("/login", this.ctrl.login);
    this.router.use(this.ctrl.authMiddleware);
    this.router.post("/grades", this.ctrl.grades);
    this.router.post("/homework", this.ctrl.homework.index);
    this.router.post("/homework/:date", this.ctrl.homework.get);
    this.router.post("/workspaces", this.ctrl.workspaces);
    this.router.post("/contacts", this.ctrl.contacts);
    this.router.post("/schoollife", this.ctrl.schoolLife);
    this.router.post("/agenda", this.ctrl.agenda);
    this.router.post("/mails", this.ctrl.mails);
  }
}

export default EdRouter;
