const router = require('express').Router();
const { user, User } = require('../../models');

// the /api/user endpoint

//create new user
router.post('/',async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        //set  up sessions with loggedIn variable set to true
        req.session.save(() => {
            req.session.username = newUser.username;
            req.session.loggedIn = true;
            res.status(200).json(newUser);
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
    }
});

//Login
