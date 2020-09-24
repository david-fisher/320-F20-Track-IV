const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    done(null, id);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
      },
      (req, id, pw, done) => {
        Users.findOne({ email: id }, (findErr, user) => {
          if (findErr) return done(findErr); // server error
          if (!user) return done(null, false, { message: 'Cannot find a user' });

          return user.comparePassword(pw, (pwErr, correct) => {
            if (correct) return done(null, user);
            else return done(null, false, { message: 'Password incorrect' });
          });
        });
      }
    )
  );
};
