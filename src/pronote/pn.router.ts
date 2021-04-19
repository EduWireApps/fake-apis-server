import express from "express";
import bodyParser from "body-parser";
import EdController from "./pn.controller";

class PnRouter {
  public path = "/pronote";
  public router = express.Router();
  public ctrl = new EdController();

  constructor() {
    this.router.use(bodyParser.text());
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get("/", this.ctrl.index);
  }
}

export default PnRouter;
