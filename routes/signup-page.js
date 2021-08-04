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

module.exports = router;