const express = require("express");

//here we'll require default infos from database
// const getData =

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home"); // . { data: getData}after we get the getData
});

module.exports = router;
