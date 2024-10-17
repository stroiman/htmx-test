const express = require("express");
const path = require("node:path");
var livereload = require("livereload");

var livereloadServer = livereload.createServer({
  exts: ["pug", "css"],
});
livereloadServer.watch([__dirname + "/public", __dirname + "/views"]);
const app = express();

app.use(require("connect-livereload")());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3344, () => {
  console.log("Listening");
});
