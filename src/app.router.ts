import express from "express";

class AppRouter {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get("/", (req, res) => {
        res.send("App root")
    });
  }
}

export default AppRouter;
