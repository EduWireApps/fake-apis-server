import App from "./app";
import Logger from "./logger";
import AppRouter from "./app.router";
import EdRouter from "./ecoledirecte/ed.router";

const routers = [new Logger(), new AppRouter(), new EdRouter()];

const app = new App(routers, 3500);

app.listen();
