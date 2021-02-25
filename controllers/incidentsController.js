var Incidents = require('../models/incidents');
var async = require('async');

const { body,validationResult } = require('express-validator');

//Display the list of all Incidents
exports.incidents_list = function(req, res, next){
    Incidents.find()
        .sort([['']])
}