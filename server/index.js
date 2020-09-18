const path = require("path");
const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();

app.post('/login', function (req, res) {
  const username = req.query.username;
  const password = req.query.password;
  console.log(req.body);
  console.log(`Hash: ${bcrypt.hashSync(password, 10)}`)
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
