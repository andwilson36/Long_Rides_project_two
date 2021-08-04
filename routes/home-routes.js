const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {


    res.render("login-page", {
      
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {


    res.render("signup-page", {
      
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {


    res.render("profile-page", {
      
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {


    res.render("dashboard", {
      
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;