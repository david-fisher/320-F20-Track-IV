const path = require("path");
const express = require("express");
const bcrypt = require("bcryptjs");
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const uri = "mongodb+srv://admin:backendbabes@cluster0.xeso1.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

let UID = 0;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

MongoClient.connect(uri, {
  useUnifiedTopology: true
}).then(client => {
  const collection = client.db("backendbabes").collection("users");
  app.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 10);
    let response = collection.insertOne({id: UID++, email: email, password_hash: hash});
    console.log(response);
    res.send('POST request to the homepage');
  });
  app.use(express.static(path.join(__dirname, "..", "build")));
  app.use(express.static("public"));

  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
  app.listen(5000, () => {
      console.log("server started on port 5000");
  });
}).catch(console.error);
