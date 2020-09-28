const path = require("path");
const express = require("express");
const bcrypt = require("bcryptjs");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;

const db = require('./db');
// const uri = "mongodb+srv://admin:backendbabes@cluster0.xeso1.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

passport.use(new Strategy(
  function(username, password, cb) {
    // return cb(null, user);
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if(bcrypt.compare(password, user.passwordHash, (err, isValid) => {
        if(err){
          return cb(err);
        }
        if(!isValid){
          return cb(null, false);
        }
        return cb(null, user)
      }));
      return cb(null, user);
    });
  }));

let UID = 0;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// MongoClient.connect(uri, {
//   useUnifiedTopology: true
// }).then(client => {
  // const collection = client.db("backendbabes").collection("users");
// app.post('/login', passport.authenticate('basic', { session: true, failureRedirect: '/login'}),
app.post('/login', (req, res, next) => {
  console.log("foo");
  passport.authenticate('basic', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (! user) {
      return res.json({ error: info.message }); // Don't want 401 here
    }
    req.logIn(user, function(err){
      if(err){
        return next(err);
      }
      let {id, name, email, picture } = user;
      res.json({id, name, email, picture });
      return next();
    });

  })(req, res, next);

});

// function (req, res) {
//   res.send("logged in");
//   // res.json({ username: req.user.username, email: })
//   // passport.authenticate('basic', { session: false })
//   // const email = req.body.email;
//   // const password = req.body.password;
//   // const hash = bcrypt.hashSync(password, 10);
//   // let response = collection.insertOne({id: UID++, email: email, password_hash: hash});
//   // console.log(response);
//   // res.send('POST request to the homepage');
// });
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
app.listen(5000, () => {
    console.log("server started on port 5000");
});
// }).catch(console.error);
