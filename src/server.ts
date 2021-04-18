import App from "./app";
import Logger from "./logger";
import AppRouter from "./app.router";
import EdRouter from "./ecoledirecte/ed.router";

const routers = [new Logger(), new AppRouter(), new EdRouter()];

let port: any = process.env.PORT;
if (port == null || port == "") {
  port = 3500;
}

const app = new App(routers, port);

app.listen();
