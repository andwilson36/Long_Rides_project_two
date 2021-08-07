const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Ride, Location } = require("../models");

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

router.get("/signup", async (req, res) => {
  try {
    res.render("signup-page", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", async (req, res) => {
  try {
    const users = req.session.username;
    console.log(users);
    res.render("profile", {
    users,
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.get("/driver", async (req, res) => {
  try {


    res.render("driver-dashboard", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {

    const users = req.session.username;

    const rideData = await Ride.findAll();

    const locationData = await Location.findAll();

    const locations = locationData.map((location) =>
      location.get({ plain: true })
    );

    const ride = rideData.map((rides) =>
      rides.get({ plain: true })
    );

    res.render("dashboard", {
      users,
      ride,
      locations,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
