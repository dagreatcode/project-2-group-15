const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");
const app = express();

// VIEWS ROUTES
module.export = function(app){
  app.get("/", (req, res) => {
    res.redirect("index")
  });

  app.get("/editteams", (req,res)=> {
    res.render("");
    // res.send("works");
  })
};

  // 
  // if(req.email) {
      
  // }

  
  // app.get("/", function(req, res) {
  //   ;
  // });
  // res.redirect(path.join(__dirname, "../views/home.handlebars"))
  // res.sendFile()
  // res.redirect("/home");
  // console.log("maybe worked")
  // res.sendFile(path.join(__dirname, "../views/home.handlebars"));


// router.get("/index", (req, res) => {
//   res.sendFile(Path.join(__dirname, "../views/index.handlebars"))
// });

// router.get("/editteams", (req, res) => {
//     res.sendFile(Path.join(__dirname, "../views/editteams.handlebars"))
// });

//   router.get("/teamchallenge", (req, res) => {
//     res.sendFile(Path.join(__dirname, "../views/teamchallenge.handlebars"))
// });

// module.exports = router;

