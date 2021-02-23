var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var incidentSchema = new Schema(
    {
        irNumber: { type: String, required: true },
        occurenceDates: { type: String, required: true },
        occurenceTimes: { type: String, required: true },
        incidentType: { type: String, required: true },
        location: { type: String, required: true },
        locationName: { type: String, required: true },
        narrative: { type: String, required: true },
        officerName: { type: String, required: true },
        officerSerialNum: { type: String, required: true },
        reportDate: { type: String, required: true },
        time: { type: String, required: true },
        value: { type: String, required: true },
        suppInt: { type: String, required: true },
    }
);

// Virtual for incidents' URL
incidentSchema
    .virtual('url')
    .get(function () {
        return '/catalog/incidents/' + this._id;
    });

//Export model
module.exports = mongoose.model('incident', incidentSchema);