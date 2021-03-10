var Incidents = require('../models/incidents');
const { body,validationResult } = require('express-validator');
var async = require('async');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all incidents.
//Tried debugging and coding to make this work, but doesn't. Shoots out error of null
exports.incident_list = function(req, res, next) {
        Incidents.findById(req.params.id)
        .populate('incident')
        .exec(function (err, list_incidents) {
            if (err) {
                return next(err);
            }
            console.log(list_incidents);
            //Successful, so render
            res.render('incidents_list', { title: 'Incidents List', incidents_list: list_incidents });
        });
};

//Displays a detailed page of a desired incident
//Tried making this work, but doesn't render anything. Just gives deprecation and unhandled promise error in terminal.
exports.incident_detail = async (req, res, next) =>{
    const incident = await Incidents.findById(req.params.id)
            .exec(incident);
    function error(err, results) {
        if (err) { return next(err); }
        if (results.incident == null) { // No results.
            var err = new Error('Incident not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('incident_detail', {incident});
    };
}


// Display detail page for a specific book.
// exports.incident_detail = function(req, res, next) {
//     async.parallel({
//         Incident: function(callback){
//             Incidents.findById(req.params.id)
//                     //  .populate('irNumber')
//                     //  .populate('occurenceDates')
//                     //  .populate('occurenceTimes')
//                     //  .populate('incidentType')
//                     //  .populate('location')
//                     //  .populate('locationName')
//                     //  .populate('narrative')
//                     //  .populate('officerName')
//                     //  .populate('officerSerialNum')
//                     //  .populate('reportDate')
//                     //  .populate('time')
//                     //  .populate('value')
//                     //  .populate('suppInt')
//                      .exec(callback);
//         }
//     }, 
//     function (err, results) {
//         if (err) { return next(err); }
//         if (results.incident == null) { // No results.
//             var err = new Error('Incident not found');
//             err.status = 404;
//             return next(err);
//         }
//         // Successful, so render.
//         res.render('incident_detail', { title: results.Incident.name, incident: results.Incident});
//     });
// };

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