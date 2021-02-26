var express = require('express');
var router = express.Router();

//Require controller modules
var incident_controller = require('../controllers/incidentController');
var people_controller = require('../controllers/peopleController');
var vehicle_controller = require('../controllers/vehicleController');

/// INCIDENTS ROUTES ///

// GET data home page
router.get('/', "works but view is not done");

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/incident/create', incident_controller.incident_create_get);

// POST request for creating Book.
router.post('/incident/create', incident_controller.incident_create_post);

// GET request to delete Book.
router.get('/incident/:id/delete', incident_controller.incident_delete_get);

// POST request to delete Book.
router.post('/incident/:id/delete', incident_controller.incident_delete_post);

// GET request to update Book.
router.get('/incident/:id/update', incident_controller.incident_update_get);

// POST request to update Book.
router.post('/incident/:id/update', incident_controller.incident_update_post);

// GET request for one Book.
router.get('/incident/:id', incident_controller.incident_detail);

// GET request for list of all Book items.
router.get('/incidents', incident_controller.incident_list);

/// PEOPLE ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/people/create', people_controller.people_create_get);

// POST request for creating Author.
router.post('/people/create', people_controller.people_create_post);

// GET request to delete Author.
router.get('/people/:id/delete', people_controller.people_delete_get);

// POST request to delete Author.
router.post('/people/:id/delete', people_controller.people_delete_post);

// GET request to update Author.
router.get('/people/:id/update', people_controller.people_update_get);

// POST request to update Author.
router.post('/people/:id/update', people_controller.people_update_post);

// GET request for one Author.
router.get('/people/:id', people_controller.people_detail);

// GET request for list of all Authors.
router.get('/peoples', people_controller.people_list);

/// VEHICLES ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/vehicle/create', vehicle_controller.vehicle_create_get);

//POST request for creating Genre.
router.post('/vehicle/create', vehicle_controller.vehicle_create_post);

// GET request to delete Genre.
router.get('/vehicle/:id/delete', vehicle_controller.vehicle_delete_get);

// POST request to delete Genre.
router.post('/vehicle/:id/delete', vehicle_controller.vehicle_delete_post);

// GET request to update Genre.
router.get('/vehicle/:id/update', vehicle_controller.vehicle_update_get);

// POST request to update Genre.
router.post('/vehicle/:id/update', vehicle_controller.vehicle_update_post);

// GET request for one Genre.
router.get('/vehicle/:id', vehicle_controller.vehicle_detail);

// GET request for list of all Genre.
router.get('/vehicles', vehicle_controller.vehicle_list);

module.exports = router;