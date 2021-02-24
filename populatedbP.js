const faker = require('faker');
const fs = require('fs');

function generatePeople() {
    // People array
    let people = [];
    for (var id = 0; id <= 10; id++) {
        let codeLetter = faker.random.word();
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
        let address = faker.address.streetAddress();
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
    return {"People Data": people};
};

let dataObjP = generatePeople();

fs.writeFileSync('people.json', JSON.stringify(dataObjP, null, '\t'));