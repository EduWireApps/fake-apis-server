const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  data = {
    data: "ecoledirecte",
  };
  res.json(data);
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ data: "" });
});

module.exports = router;
