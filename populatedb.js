const faker = require('faker');
const fs = require('fs');

function generateVehicles(){
    let vehicles = [];

    for (var id=0; id<=10; id++){
        let vehicleSerial = faker.random.number();
        let licenseNum = faker.random.alphaNumeric();
        let state = faker.address.stateAbbr();
        let year = faker.random.number();
        let make = faker.vehicle.manufacturer();
        let model = faker.vehicle.model();
        let color = faker.internet.color();
        let value = faker.random.number();

        vehicles.push({
            "Vehicle Serial #": vehicleSerial,
            "License #": licenseNum,
            "State": state,
            "Year": year,
            "Make": make,
            "Model": model,
            "Color": color,
            "Value": value
        });
    }

    return {"Vehicle Data": vehicles}
}

function generateIncidents(){
    let incidents = [];

    for (var id=0; id<=10; id++){
        let irNumber = faker.random.number();
        let occurDates = faker.date.between();
        let occurTimes = faker.time.recent();
        let incidentType = faker.random.word();
        let location = faker.address.streetAddress();
        let locationName = faker.company.companyName();
        let narrative = faker.lorem.sentences();
        let officerName = faker.name.findName();
        let officerSerial = faker.random.number();
        let reportDate = faker.date.recent();
        let reportTime = faker.time.recent();
        let value = faker.random.number();
        let suppInt = faker.lorem.word();

        incidents.push({
            "Incident Report #": irNumber,
            "Occurence Dates": occurDates,
            "Occurence Times": occurTimes,
            "Incident Type": incidentType,
            "Location": location,
            "Location Name": locationName,
            "Narrative": narrative,
            "Officer Name": officerName,
            "Officer Serial #": officerSerial,
            "Report Date": reportDate,
            "Report Time": reportTime,
            "Value": value,
            "Supplemental Incident": suppInt
        })
    }

    return{"Incident Data": incidents}
}

let dataObjV = generateVehicles();
let dataObjI = generateIncidents();
fs.writeFileSync('data.json', JSON.stringify(dataObjV, null, '\t'));
fs.writeFileSync('data.json', JSON.stringify(dataObjI, null, '\t'));

