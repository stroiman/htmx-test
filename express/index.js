const express = require("express");
const path = require("node:path");
const auth = require("./auth");

const app = express();

app.use(require("connect-livereload")());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
