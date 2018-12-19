const express = require("express");

//here we'll require default infos from database
// const getData =

const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home"); // . { data: getData}after we get the getData
});

// create profile route
router.get("/create-profile", (req, res) => {
  res.render("create-profile"); // . { data: getData}after we get the getData
});

// search profiles route
router.get("/search-profiles", (req, res) => {
  res.render("search-profiles"); // . { data: getData}after we get the getData
});

// individual profile route
// - use a variable in the route name: see express-workshop with the fruit
// router.get("/profile", (req, res) => {
//   res.render("profile"); 
// });


// host files


module.exports = router;
