const app = require("express")();
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3344, () => {
  console.log("Listening");
});
