const express = require("express");
const router = express.Router();

router.get('*', function(req, res){
  res.status(404).send(`Beep booooooooop. 404. GET for ${req.originalUrl} not found.`);
});

router.post('*', function(req, res){
  res.status(404).send(`Beep booooooooop. 404. POST for ${req.originalUrl} not found.`);
});

router.put('*', function(req, res){
  res.status(404).send(`Beep booooooooop. 404. PUT for ${req.originalUrl} not found.`);
});

router.patch('*', function(req, res){
  res.status(404).send(`Beep booooooooop. 404. PATCH for ${req.originalUrl} not found.`);
});

router.delete('*', function(req, res){
  res.status(404).send(`Beep booooooooop. 404. DELETE for ${req.originalUrl} not found.`);
});

module.exports = router;
