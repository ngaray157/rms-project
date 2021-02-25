var express = require('express');
var router = express.Router();

//Require controller modules
var incidents_controller = require('../controllers/incidentsController');
var people_controller = require('../controllers/incidentsController');
var vehicles_controller = require('../controllers/incidentsController');

/// INCIDENTS ROUTES ///

// Data home page
router.get('/', "works but view is not done");

/// PEOPLE ROUTES ///

/// VEHICLES ROUTES ///

module.exports = router;