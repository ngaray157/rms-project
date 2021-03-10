var express = require('express');
var router = express.Router();

//Require controller modules
var incident_controller = require('../controllers/incidentController');
var people_controller = require('../controllers/peopleController');
var vehicle_controller = require('../controllers/vehicleController');

/// INCIDENTS ROUTES ///

// GET data home page
router.get('/', incident_controller.index);

// GET request for creating an Incident. NOTE This must come before routes that display Incident (uses id).
router.get('/incident/create', incident_controller.incident_create_get);

// POST request for creating Incident.
router.post('/incident/create', incident_controller.incident_create_post);

// GET request to delete Incident.
router.get('/incident/:id/delete', incident_controller.incident_delete_get);

// POST request to delete Incident.
router.post('/incident/:id/delete', incident_controller.incident_delete_post);

// GET request to update Incident.
router.get('/incident/:id/update', incident_controller.incident_update_get);

// POST request to update Incident.
router.post('/incident/:id/update', incident_controller.incident_update_post);

// GET request for one Incident.
router.get('/incident/:id', incident_controller.incident_detail);

// GET request for list of all Incidents.
router.get('/incidents', incident_controller.incident_list);

/// PEOPLE ROUTES ///

// GET request for creating People. NOTE This must come before route for id (i.e. display people).
router.get('/people/create', people_controller.people_create_get);

// POST request for creating People.
router.post('/people/create', people_controller.people_create_post);

// GET request to delete People.
router.get('/people/:id/delete', people_controller.people_delete_get);

// POST request to delete People.
router.post('/people/:id/delete', people_controller.people_delete_post);

// GET request to update People.
router.get('/people/:id/update', people_controller.people_update_get);

// POST request to update People.
router.post('/people/:id/update', people_controller.people_update_post);

// GET request for one People.
router.get('/people/:id', people_controller.people_detail);

// GET request for list of all People.
router.get('/people', people_controller.people_list);

/// VEHICLES ROUTES ///

// GET request for creating a Vehicle. NOTE This must come before route that displays Vehicle (uses id).
router.get('/vehicle/create', vehicle_controller.vehicle_create_get);

//POST request for creating Vehicle.
router.post('/vehicle/create', vehicle_controller.vehicle_create_post);

// GET request to delete Vehicle.
router.get('/vehicle/:id/delete', vehicle_controller.vehicle_delete_get);

// POST request to delete Vehicle.
router.post('/vehicle/:id/delete', vehicle_controller.vehicle_delete_post);

// GET request to update Vehicle.
router.get('/vehicle/:id/update', vehicle_controller.vehicle_update_get);

// POST request to update Vehicle.
router.post('/vehicle/:id/update', vehicle_controller.vehicle_update_post);

// GET request for one Vehicle.
router.get('/vehicle/:id', vehicle_controller.vehicle_detail);

// GET request for list of all Vehicle.
router.get('/vehicles', vehicle_controller.vehicle_list);

module.exports = router;