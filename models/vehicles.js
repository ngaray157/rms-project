var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VehicleSchema = new Schema(
    {
        vehicleSerial: { type: String, required: true },
        licenseNum: { type: String, required: true },
        state: { type: String, required: true, maxlength: 2 },
        year: { type: Number, required: true, maxlength: 3 },
        make: { type: String, required: true },
        model: { type: String, required: true },
        value: { type: Number, required: true },
        color: { type: String, required: true, maxlength: 3 },
    }
);

// Virtual for book's URL
VehicleSchema
    .virtual('url')
    .get(function () {
        return '/catalog/vehicle/' + this._id;
    });

//Export model
module.exports = mongoose.model('Vehicle', VehicleSchema);