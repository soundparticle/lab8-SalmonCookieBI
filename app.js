/* globals locationList */

// cookiesPerHour stores data for number of cookies needed per hour
let cookiesPerHour = [];

// let hours = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00'];

for(var i = 0; i < locationList.length; i++) {
    let tBody = document.querySelector('tbody');
    let tRow = document.createElement('tr');
    tRow.id = 'tr-' + i.toString();
    tBody.appendChild(tRow);
    locationName(i);
    cookiesNeededPerHour(i);
    //hoursOfOperation(i);
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
        tData.textContent = Math.round(cookiesPerHour[j]);
        tRow.appendChild(tData);
    }
}


document.addEventListener(submit, function);





/*
function hoursOfOperation(i) {
    for(var k = 0; k < locationList[i].hours.length; k++) {
        let tRow = document.querySelector('#cookie-header');
        let tHeader = document.createElement('th');
        
        if(hours[k].includes(locationList[i].hours[k])) {
            tHeader.textContent = locationList[i].hours[k];
            tRow.appendChild(tHeader);
        }
        else {
            tHeader.textContent = 'CLOSED';
            tRow.appendChild(tHeader);
        }
    }
} */



