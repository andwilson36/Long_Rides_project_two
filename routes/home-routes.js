const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Ride, Location } = require("../models");

router.get("/", async (req, res) => {
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

router.get("/profile", withAuth, async (req, res) => {
  try {
    const user = await User.findAll();
    const usersData = user.map((project) => project.get({ plain: true }));
    let currentUser;
    for (let i = 0; usersData.length > i; i++) {
      if (usersData[i].username = req.session.username) {
        currentUser = usersData[i]
      }
    }

    res.render("profile", {
      currentUser,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/driver", withAuth, async (req, res) => {
  try {
    const user = await User.findAll();
    const usersData = user.map((project) => project.get({ plain: true }));
    let currentUser;
    let currentUserRides = [];
    for (let i = 0; usersData.length > i; i++) {
      if (usersData[i].username = req.session.username) {
        currentUser = usersData[i]
      }
    }

    const rideData = await Ride.findAll();

    const locationData = await Location.findAll();

    const locations = locationData.map((location) =>
      location.get({ plain: true })
    );

    let j = 0;
    for (let i = 0; rideData.length > i; i++) {
      if (rideData[i].driver_name === currentUser.username) {
        currentUserRides[j] = rideData[i].dataValues;
        j++;
      }
    }

    res.render("driver-dashboard", {
      rideData,
      locations,
      currentUser,
      currentUserRides,
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
