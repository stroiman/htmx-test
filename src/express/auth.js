const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded());

router.get("/login", (req, res) =>
  res.render("auth/login-page", { formData: {} }),
);

router.post("/login", (req, res) => {
  if (req.body.username === "validuser") {
    req.session.loggedIn = true;
    res
      .status(303)
      //.header("location", "/me")
      .header("HX-Push-Url", "/me")
      .render("me");
    //.send();
  } else {
    res.status(400).render("auth/login-form", {
      formData: { username: req.body.username },
      invalidCredentials: true,
    });
  }
});

module.exports = router;
