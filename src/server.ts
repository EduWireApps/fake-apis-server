import App from "./app";
import AppRouter from "./app.router";
import EdRouter from "./ecoledirecte/ed.router";

const routers = [new AppRouter(), new EdRouter()];

const app = new App(routers, 3500);

app.listen();
