const router = require('express').Router();
const { User } = require('../../models');

// the /api/user-routes endpoint

//create new user

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({

      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //set  up sessions with loggedIn variable set to true
    req.session.save(() => {
      req.session.username = newUser.username;
      req.session.email = newUser.email;
      req.session.password = newUser.password;
      req.session.loggedIn = true;
      res.status(200).json(newUser);

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.username = user.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//logout 
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:username', async (req, res) => {
  try {
    const userData = await User.findAll();

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].username == req.session.username) {
        User.update({
          driver: true,
        },
          {
            where: { username: req.params.username, }
          })
          .then((updatedUser) => {
            res.json(updatedUser);
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
          });
      }
    }
    req.session.save(() => {
      req.session.loggedIn = true;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
