import { sampleFunction } from "./utils";

declare module "express-serve-static-core" {
  interface Request {
    user?: Object;
  }
}

class PnController {
  public index(req, res) {
    res.send("Pronote");
  }
}

export default PnController;
