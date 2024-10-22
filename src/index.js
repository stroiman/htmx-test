const app = require("./express");
var livereload = require("livereload");
const path = require("node:path");
const { root } = require("./config");

var livereloadServer = livereload.createServer({
  exts: ["pug", "css"],
});
livereloadServer.watch([
  path.join(root, "public"),
  path.join(root, "views"),
  path.join(root, "src"),
]);

app.use((err, req, res, next) => {
  if (req.accepts("html")) {
    res.render("server-error", { err });
  } else {
    next(err);
  }
});

app.listen(3344, () => {
  console.log("Listening");
});
