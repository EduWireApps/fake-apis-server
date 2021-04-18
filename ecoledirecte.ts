import express from "express";
import bodyParser from "body-parser";
const router = express.Router();

router.use(bodyParser.text());

const convertBody = (text) => {
  return JSON.parse(text.substring(5));
};

router.get("/", (req, res) => {
  const data = {
    data: "ecoledirecte",
  };
  res.json(data);
});

router.post("/login", (req, res) => {
  const data = convertBody(req.body);
  res.json(data);
});

export default router;
