const path = require('path');
const express = require('express');
const passport = require('passport');
const auth = require('./auth');
const router = require('./route');
const session = require('express-session');

const app = express();
app.use(session({ secret: 'secret code', resave: true, saveUninitialized: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
auth.config();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

app.use(router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log('server started on port 5000');
});
