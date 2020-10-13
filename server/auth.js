const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('./db');

module.exports = {
  config: () => {
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    passport.use(
      new LocalStrategy(
        {
          usernameField: 'username',
          passwordField: 'password',
          session: true, // 세션에 저장 여부
        },
        (username, password, cb) => {
          db.users.findByUsername(username, (err, user) => {
            console.log(user);
            if (err) {
              return cb(err);
            }
            if (!user) {
              return cb(null, null, { message: 'Cannot find username' });
            }
            if (password !== user.passwordHash) {
              return cb(null, null, { message: 'Password does not match' });
            }
            return cb(null, user);
          });
        }
      )
    );
  },

  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
  },

  isNotAuthenticated: (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    res.redirect('/');
  },
  validateToken: (token) => {
    //this function validates the given token
    //TODO: implement validation    
    return true;
  }
};
