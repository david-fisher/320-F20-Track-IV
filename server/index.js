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
const bodyParser = require('body-parser');

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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
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
    let error_description;
    if( (header_validation = Helper.VALIDATE_HEADERS(req.headers, ERROR_CODE)).status != 202){
      return res.json(header_validation);
    }
    //validate token
    if(!auth.validateToken(header_validation.token)){
      error_description = "Invalid authorization token."
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description));
    }

    let token = header_validation.token;
    //db interface
    let response = {
      drafts: db.getDraftedSimulations(token),
      closed: db.getClosedSimulations(token),
      open: db.getOpenSimulations(token),
      status: 202
    }

    return res.json(response);
});

app.get(`/api/v${__VERSION}/simulation/:simulation_id/introduction`, (req, res, next) => {
    console.log("get");
    const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_SIMULATION_INTRODUCTION; //ERROR CODE FOR DASHBOARD
    let error_description;
    if( (header_validation = Helper.VALIDATE_HEADERS(req.headers, ERROR_CODE)).status != 202){
      console.log("foo");
      return res.json(header_validation);
    }
    //validate token
    if(!auth.validateToken(header_validation.token)){
      error_description = "Invalid authorization token."
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description));
    }

    let token = header_validation.token;
    //db interface
    let response;
    if ((introduction = db.getSimulationIntroductionByID(token, req.params.simulation_id)) != 404){

      response = {
        summary: introduction,
        status: 202
      }
    }else{
      error_description = `No simulation found with id ${req.params.simulation_id}.`
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description))
    }

    return res.json(response);
});

app.post(`/api/v${__VERSION}/simulation/:simulation_id/introduction`, (req, res, next) => {
    const ERROR_CODE = BB_ERROR_CODES.ERROR_CODE_SIMULATION_INTRODUCTION; //ERROR CODE FOR DASHBOARD
    let error_description;
    if( (header_validation = Helper.VALIDATE_HEADERS(req.headers, ERROR_CODE, true)).status != 202){
      return res.json(header_validation);
    }
    //validate token
    if(!auth.validateToken(header_validation.token)){
      error_description = "Invalid authorization token."
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description));
    }

    let token = header_validation.token;
    //db interface
    let response;
    if ((status = db.setSimulationIntroductionByID(token, req.params.simulation_id, req.body.summary)) != 404){
      response = {
        status: 202
      }
    }else{
      error_description = `No simulation found with id ${req.params.simulation_id}.`
      return res.json(Helper.INVALID_RESPONSE(ERROR_CODE, error_description))
    }

    return res.json(response);
});

// http://localhost:3000/api/v1/simulation/:simulation_id/introduction

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
