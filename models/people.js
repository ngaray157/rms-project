var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peopleSchema = new Schema(
    {
        code: { type: String, required: true },
        lastName: { type: String, required: true },
        firstName: { type: String, required: true },
        middleName: { type: String, required: true },
        ssn: { type: String, required: true },
        dlNumber: { type: String, required: true },
        expDate: { type: String, required: true },
        race: { type: String, required: true },
        sex: { type: String, required: true },
        height: { type: String, required: true },
        weight: { type: String, required: true },
        eyeColor: { type: String, required: true },
        hairColor: { type: String, required: true },
        scars: { type: String, required: true },
        tattoos: { type: String, required: true },
        image: { type: String, required: true },
        address: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        gangAffil: { type: String, required: true },
    }
);

// Virtual for people's URL
peopleSchema
    .virtual('url')
    .get(function () {
        return '/catalog/people/' + this._id;
    });

//Export model
module.exports = mongoose.model('incident', incidentSchema);

// Faker JS
const faker = require('faker');

//Need code
let lastName = faker.name.lastName();
let firstName = faker.name.firstName();
let middleName = faker.name.middleName();
//SSN
//DL#
//Exp date
// Race
let sex = faker.gender.sex();
// Height
// Weight
// Eyes
// Hair
let birthDate = faker.past.birthDate();
// Age
let scars = faker.random.word.scars();
// Tattoos
let address = faker.streetAddress.streetAdress();
let phoneNum = faker.phone.phoneNumber();
// Gang affiliation