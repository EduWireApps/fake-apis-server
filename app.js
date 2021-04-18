const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3500;
const ecoledirecte = require("./ecoledirecte");
const pronote = require("./pronote");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.raw({ type: "text/plain" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ecoledirecte", ecoledirecte);
app.use("/pronote", pronote);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
