const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
const users = require('./db/user');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'MUST_BE_SCECRET',
    resave: true,
    saveUninitialized: false,
    cookie: {
      expires: 1 * 60 * 60 * 1000,
      httpOnly: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./db/db')();
passportConfig();

app.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/',
  }),
  (req, res) => {
    console.log(req.body);
    res.send({ user: req.user });
  }
);

app.post('/join', (req, res, next) => {
  const { firstName, lastName, email, password, userType } = req.body;
  users
    .create({ firstName, lastName, email, password, userType })
    .then((user) => {
      req.login(user, (err) => {
        if (err) next(err);
        else res.redirect('/');
      });
    })
    .catch((err) => {
      next(err);
    });
});

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log('server started on port 5000');
});
