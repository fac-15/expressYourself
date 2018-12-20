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

// load public folder
app.use(
  express.static(path.join(__dirname, "..", "/public"), { maxAge: "30d" })
);

app.set("port", process.env.PORT || 1989);
app.use(routes);

module.exports = app;
