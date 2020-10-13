const path = require('path');
const express = require('express');
const passport = require('passport');
const auth = require('./auth');
const router = require('./route');
const session = require('express-session');
const CONSTANTS = require('./const.js');
require('dotenv').config(); //env vars

const __VERSION = process.env.__VERSION || 1;

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

/*
==============================================
 ||                                        ||
 ||                Routes                  ||
 ||                                        ||
==============================================
*/

app.get(`/api/v${__VERSION}/instructor/dashboard`, (req, res, next) => {
    const ERROR_CODE = 50100                      //ERROR CODE FOR DASHBOARD
    let error_description = "Authorization error."    //Default error description
    let prefix, token;
    let auth_header = req.header("Authorization") || req.header("authorization")

    // check and parse authorization

    if(auth_header){ //authorization header is present?
      if( ([prefix, token] = auth_header.split(" ")).length != 2){ //format is "Bearer {token}"?
        if(!(prefix.toLowerCase() == "bearer")){ //authorization is malformed?
          error_description = "Invalid authorization format. Method requires Bearer token."
          return res.json(CONSTANTS.INVALID_RESPONSE(ERROR_CODE, error_description));
        }
      }else{ //if not, return and provide error description
        error_description = "Invalid authorization format. Method requires Bearer token."
        return res.json(CONSTANTS.INVALID_RESPONSE(ERROR_CODE, error_description));
      }
    }else{
      error_description = "No authorization header. Please check documentation if error persists."
      return res.json(CONSTANTS.INVALID_RESPONSE(ERROR_CODE, error_description));
    }

    //validate token


    let drafts = [];
    let open = [];
    let closed = [];
    console.log(CONSTANTS.INVALID_RESPONSE(50100, "Invalid auth token."))

});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
