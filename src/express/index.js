const express = require("express");
const path = require("node:path");
const auth = require("./auth");
const { root } = require("../config");

const app = express();

app.use(require("connect-livereload")());
app.set("views", path.join(root, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(root, "public")));
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/me", (req, res) => {
  res.render("index");
});

app.use((err, req, res, next) => {
  if (req.accepts("html")) {
    res.render("server-error", { err });
  } else {
    next(err);
  }
});

module.exports = app;
