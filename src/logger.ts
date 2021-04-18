import express from "express";

class Logger {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.router.use(this.log);
  }

  private log(req, res, next) {
    const date = new Date();
    console.log(
      `[${req.method}] ${
        req.path
      } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()} ${
        res.statusCode
      }`
    );
    next();
  }
}

export default Logger;
