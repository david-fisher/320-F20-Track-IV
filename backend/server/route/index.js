const express = require('express');
const auth = require('./auth');
const dashboard = require('./dashboard');
const simulation = require('./simulation');
const router = require("express-promise-router")();

router.use('/auth', auth);
router.use('/dashboard', dashboard);
router.use('/simulation', simulation);

module.exports = router;
