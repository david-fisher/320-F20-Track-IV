const express = require('express');
const auth = require('../auth');
const router = express.Router();

router.get('/login', auth.isNotAuthenticated, (req, res, next) => {
  res.status(202);
  res.json({"token": "abcdefghijklmnopqrstuvwxyz"});
  // passport.authenticate('local', (err, user, info) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     return res.json({ error: info.message }); // Don't want 401 here
  //   }
  //   req.logIn(user, function (err) {
  //     if (err) {
  //       return next(err);
  //     }
  //     let { first_name, last_name, email } = user;
  //     res.json({ first_name, last_name, email });
  //     return next();
  //   });
  // })(req, res, next);
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
