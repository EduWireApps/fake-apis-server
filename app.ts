import express from "express";
import ecoledirecte from "./ecoledirecte";
import pronote from "./pronote";

const app = express();
const port: number = 3500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ecoledirecte", ecoledirecte);
app.use("/pronote", pronote);

app.listen(port, () => {
  return console.log(`Server listening at http://localhost:${port}`);
});
