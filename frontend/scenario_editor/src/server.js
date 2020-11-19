//Not sure of this file's purpose. Used for server implementation?
//Currently I have removed lines in package.json and package-lock.json 
//that were used to make this work. - Jonathan
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname + "/src", 'build')));
app.listen(PORT);
