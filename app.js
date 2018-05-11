/* globals locationList */

// iterate through locationArray and grab name of location and open times

for(var i = 0; i < locationList.length; i++) {
    let tBody = document.querySelector('tbody');
    let tRow = document.createElement('tr');
    tRow.id = 'tr-' + i.toString();
    tBody.appendChild(tRow);
    locationData(i);
    hoursOpen(i);
}


function locationData(i) {
    
    let tRow = document.querySelector('#tr-' + i.toString());
    let tData = document.createElement('td');
    tRow.appendChild(tData);
    tData.textContent = locationList[i].location;
    
}
function hoursOpen(i) { 
    
    let tRow = document.querySelector('#tr-' + i.toString());
    let tData = document.createElement('td');
    tRow.appendChild(tData);
    tData.textContent = locationList[i].totalNeeded();
    


}