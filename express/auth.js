const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => res.render("auth/login-page"));

router.post("/login", (req, res) => {
  res.render("auth/login-form");
});

module.exports = router;
