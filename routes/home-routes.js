const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("login-page", {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;