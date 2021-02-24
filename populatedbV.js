const faker = require('faker');
const fs = require('fs');

function generateVehicles(){
    let vehicles = [];

    for (var id=0; id<=10; id++){
        let vehicleSerial = faker.random.number();
        let licenseNum = faker.random.number();
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

let dataObjV = generateVehicles();

fs.writeFileSync('vehicles.json', JSON.stringify(dataObjV, null, '\t'));