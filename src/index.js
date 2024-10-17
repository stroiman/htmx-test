const app = require("./express");
var livereload = require("livereload");
const path = require("node:path");
const { root } = require("./config");

var livereloadServer = livereload.createServer({
  exts: ["pug", "css"],
});
livereloadServer.watch([path.join(root, "public"), path.join(root, "views")]);
app.use(require("connect-livereload")());

app.listen(3344, () => {
  console.log("Listening");
});
