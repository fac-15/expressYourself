const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

// yet to write files
const routes = require("./routes/routes");
const helpers = require("./views/helpers/index");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);

app.set("port", process.env.PORT || 6666);
app.use(routes);

module.exports = app;
