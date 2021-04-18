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
    this.router.post("/test", this.ctrl.test);
    this.router.post("/grades", this.ctrl.grades);
  }
}

export default EdRouter;
