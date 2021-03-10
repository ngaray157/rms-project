var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IncidentSchema = new Schema(
    {
        incidentName: { type: String, required: true },
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

// Virtual for incident name
IncidentSchema.virtual('name').get(function () {
    return this.incidentName;
});

// Virtual for incidents' URL
IncidentSchema.virtual('url').get(function () {
    return '/data/incidents/' + this._id;
});

// Virtual for incident report number
IncidentSchema.virtual('reportNum').get(function () {
    return this.irNumber;
});

// Virtual for incident occurence dates
IncidentSchema.virtual('occurence').get(function () {
    return DateTime.fromJSDate(this.occurenceDates).toISODate(); //format 'YYYY-MM-DD'
});

//Export model
module.exports = mongoose.model('Incident', IncidentSchema);