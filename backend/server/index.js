const path = require("path");
const express = require("express");
const router = require("./route");
const session = require("express-session");
const auth = require("./auth");
const passport = require("passport");
require("dotenv").config(); //env vars
const bodyParser = require("body-parser");
const cors = require("cors");

const __VERSION = process.env.__VERSION || 1;

const app = express();
app.use(
  session({
    secret: process.env.__secretSessionCode,
    resave: true,
    saveUninitialized: false,
  })
);

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
auth.config();
app.use(router);

// routes
app.use(`/api/v${__VERSION}`, router);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
