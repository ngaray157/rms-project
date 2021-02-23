const faker = require('faker');
const fs = require('fs');
var async = require('async');
var vehicles = require('./models/vehicles');

function generateVehicles(){
    let vehicles = [];

    for (var id=0; id<=10; id++){
        let vehicleSerial = faker.random.number();
        let licenseNum = faker.random.alphaNumeric();
        let state = faker.address.stateAbbr();
        let year = faker.random.number();
        //make
        //model
        let color = faker.internet.color();
        let value = faker.random.number();

        vehicles.push({
            "Vehicle Serial #": vehicleSerial,
            "License #": licenseNum,
            "State": state,
            "Year": year,
            "Color": color,
            "Value": value
        });
    }

    return {"Vehicle Data": vehicles}
}

let dataObj = generateVehicles();

