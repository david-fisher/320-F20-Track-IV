const path = require("path");
const express = require("express");
const passport = require("passport");
const auth = require("./auth");
const router = require("./route");
const session = require("express-session");
require("dotenv").config(); //env vars
const bodyParser = require("body-parser");

const __VERSION = process.env.__VERSION || 1;

const app = express();
<<<<<<< HEAD
app.use(session({ secret: process.env.__secretSessionCode, resave: true, saveUninitialized: false }));
=======
app.use(session({ secret: "secret code", resave: true, saveUninitialized: false }));
>>>>>>> f906db24abce81445a8a47777c857e8501594285
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
auth.config();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// routes
app.use(`/api/v${__VERSION}`, router);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
