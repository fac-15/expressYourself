const express = require("express");
const getData = require("../model/getData");

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
  getData.getUserData((err, userData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }

  // getData.getLanguageData((error, skillData) => {
  //   if (error) {
  //     res.statusCode = 500;
  //     res.send("Error");
  //   }
    res.render("search-profiles", 
    { 
      // skills: skillData,
      users: userData });
      })
    })
  // });



// individual profile route
// - use a variable in the route name: see express-workshop with the fruit
// router.get("/profile", (req, res) => {
//   res.render("profile");
// });

// module.exports = {
//   router,
//   app,
// }

module.exports = router;
