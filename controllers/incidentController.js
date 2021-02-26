var Incidents = require('../models/incidents');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all incidents.
exports.incident_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident list');
};

// Display detail page for a specific book.
exports.incident_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident detail: ' + req.params.id);
};

// Display book create form on GET.
exports.incident_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident create GET');
};

// Handle book create on POST.
exports.incident_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident create POST');
};

// Display book delete form on GET.
exports.incident_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident delete GET');
};

// Handle book delete on POST.
exports.incident_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident delete POST');
};

// Display book update form on GET.
exports.incident_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident update GET');
};

// Handle book update on POST.
exports.incident_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Incident update POST');
};