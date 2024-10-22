const express = require("express");
const path = require("node:path");
const auth = require("./auth");
const local = require("./local");
const { root } = require("../config");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  }),
);

app.set("views", path.join(root, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(root, "public")));
app.use("/auth", auth);
app.use("/local", local);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/me", (req, res) => {
  res.render("me");
});

module.exports = app;
