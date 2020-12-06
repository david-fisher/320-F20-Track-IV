const passport = require("passport");
const SamlStrategy = require('passport-saml').Strategy;
const db = require("./db")
require("dotenv").config();

module.exports = {
  config: () => {
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    passport.use(new SamlStrategy(
      {
        path: '/auth/login/callback',
        entryPoint: 'https://webauth.umass.edu/idp/profile/SAML2/Redirect/SSO',
        issuer: 'passport-saml'
      },

      function(profile, done) {
        return done(profile);
      }));
  },
};
