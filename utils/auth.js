const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.render('login-page');
  } else {
    next();
  }
};

module.exports = withAuth;