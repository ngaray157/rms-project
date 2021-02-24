const faker = require('faker');
const fs = require('fs');
// People population

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


function generatePeople() {
    // People array
    let people = [];
    for (var id = 0; id <= 10; id++) {
        let codeLetter = faker.random.alpha();
        let lastName = faker.name.lastName();
        let firstName = faker.name.firstName();
        let middleName = faker.name.middleName();
        let ssn = faker.random.number();
        let dl = faker.random.number();
        let expDate = faker.date.future();
        let race = faker.random.word();
        let sex = faker.name.gender();
        let height = faker.random.number();
        let weight = faker.random.number();
        let eyes = faker.internet.color();
        let hair = faker.internet.color();
        let birthDate = faker.date.past();
        let age = faker.random.number();
        let scars = faker.random.word();
        let tattoos = faker.random.word();
        let address = faker.address.streetAdress();
        let phoneNum = faker.phone.phoneNumber();
        let gangAffil = faker.random.word();

        people.push({
            "Code": codeLetter,
            "Last Name": lastName,
            "First Name:": firstName,
            "Middle Name": middleName,
            "Social Security #": ssn,
            "Drivers License #": dl,
            "Expiration Date": expDate,
            "Race": race,
            "Sex": sex,
            "Height": height,
            "Weight": weight,
            "Eye Color": eyes,
            "Hair Color": hair,
            "Date of Birth": birthDate,
            "Age": age,
            "Scars": scars,
            "Tattoos": tattoos,
            "Address": address,
            "Phone Number": phoneNum,
            "Gang Affiliation": gangAffil
        });
    }
    return ("People Data", people);
};

let dataObjP = generatePeople();

fs.writeFileSync('data.json', JSON.stringify(dataObjP, null, '\t'));