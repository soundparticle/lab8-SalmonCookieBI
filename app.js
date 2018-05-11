/* globals locationList */

// ranNum stores data for number of cookies need per hour
let cookiesPerHour = [];

for(var i = 0; i < locationList.length; i++) {
    let tBody = document.querySelector('tbody');
    let tRow = document.createElement('tr');
    tRow.id = 'tr-' + i.toString();
    tBody.appendChild(tRow);
    locationName(i);
    cookiesNeededPerHour(i);
}

// inserts location name of each cookie shop in table
function locationName(i) {
    let tRow = document.querySelector('#tr-' + i.toString());
    let tData = document.createElement('td');
    tData.textContent = locationList[i].location;  
    tRow.appendChild(tData);
}

// inserts number of cookies needed per hour for each cookie location. 
function cookiesNeededPerHour(i) {
    for(var j = 0; j < 15; j++) {
        let tRow = document.querySelector('#tr-' + i.toString());
        let tData = document.createElement('td');
        cookiesPerHour[j] = locationList[i].totalNeeded();
        tData.textContent = cookiesPerHour[j];
        tRow.appendChild(tData);
    }
}

/*
function hoursOfOperation(i) {
    let tRow = document.querySelector('#cookie-header');
    let tHeader = document.createElement('th');
    tHeader.textContent = locationList[i].hours;
    tRow.appendChild(tHeader);
} */
