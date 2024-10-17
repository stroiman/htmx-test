const app = require("./express");
var livereload = require("livereload");

var livereloadServer = livereload.createServer({
  exts: ["pug", "css"],
});
livereloadServer.watch([__dirname + "/public", __dirname + "/views"]);
app.use(require("connect-livereload")());

app.listen(3344, () => {
  console.log("Listening");
});
