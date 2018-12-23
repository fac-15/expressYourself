const express = require("express");
const getData = require("../model/getData");

// setup language options
// - needs destructuring
const {langData} = require("../model/langData");

// create a new router
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home");
});

// create profile route
router.get("/create-profile", (req, res) => {
  res.render("create-profile", { languages: langData } );
});


// search profiles route
router.get("/search-profiles", (req, res) => {
  getData.getUserData((err, userData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
    res.render("search-profiles", { users: userData, languages: langData } )
  })
})


// search tool
router.get('/search-user', (req, res) => {

  getData.getUserData((err, userData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
    res.json(userData)
  })
})




// error pages
router.use(function(req, res, next){
  res.status(404);

  if (req.accepts('html')) {
    res.render("404");
    return;
  }

  if (req.accepts('json')) {
    res.render("500");
    return;
  }

  res.type('txt').send('Not found');
});

module.exports = router;