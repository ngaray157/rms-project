const faker = require('faker');
const fs = require('fs');

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

let dataObjI = generateIncidents();

fs.writeFileSync('incidents.json', JSON.stringify(dataObjI, null, '\t'));