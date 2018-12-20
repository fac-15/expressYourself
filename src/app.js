const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
// yet to write files
const routes = require("./routes/routes");
const helpers = require("./views/helpers/index");
const postData = require("./model/postData.js");

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

app.use(bodyParser.json());

// parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));

// create a post '/fruit' handler and log 'name' and 'image_url'
// redirect to '/fruit'

app.post("/create-profile", (req, res) => {
  // html = req.body.html;
  // console.log(req.body);
  // console.log(req.body.name[0]);
  // console.log(req.body.name[1]);

  // // let data = JSON.stringify(req.body);
  postData.postDataLanguages(
    req.body.name,
    req.body.bio,
    req.body.html,
    req.body.css,
    req.body.js,
    req.body.sql,
    req.body.node
  );
  res.redirect("/create-profile");
});

app.set("port", process.env.PORT || 1989);
app.use(routes);

module.exports = app;
