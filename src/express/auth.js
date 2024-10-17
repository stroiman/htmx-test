const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded());

router.get("/login", (req, res) => res.render("auth/login-page"));

router.post("/login", (req, res) => {
  if (req.body.username === "validuser") {
    res.status(301).header("location", "/me").send();
  } else {
    res.status(400).render("auth/login-form");
  }
});

module.exports = router;
