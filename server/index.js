const path = require('path');
const express = require('express');
const passport = require('passport');
const auth = require('./auth');
const router = require('./route');
const session = require('express-session');
const Helper = require('./helper.js');
const db = require('./db');
const BB_ERROR_CODES = require('./constants.js')
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

//stub generation
app.get(`/api/v${__VERSION}/instructor/dashboard`, (req, res, next) => {
    const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_INSTRUCTOR_DASHBOARD; //ERROR CODE FOR DASHBOARD
    if( (header_validation = Helper.VALIDATE_HEADERS(req.headers, ERROR_CODE)).status != 202){
      return res.json(header_validation);
    }
    //validate token
    if(!auth.validateToken(header_validation.token)){
      error_description = "Invalid authorization token."
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description));
    }

    let token = header_validation.token;

    let response = {
      drafts: db.getDraftedSimulations(token),
      closed: db.getClosedSimulations(token),
      open: db.getOpenSimulations(token),
      status: 202
    }

    return res.json(response);
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
