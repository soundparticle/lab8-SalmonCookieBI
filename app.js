/* globals locationList */

// iterate through locationArray and grab name of location and open times

for(var i = 0; i < locationList.length; i++) {
    let tBody = document.querySelector('tbody');
    let tRow = document.createElement('tr');
    tRow.id = 'tr-' + i.toString();
    tBody.appendChild(tRow);
    locationData(i);
}


function locationData(j) {
    for(var j = 0; j < locationList.length; j++) {
        let tRow = document.querySelector('#tr-' + j.toString());
        let tData = document.createElement('td');
        tRow.appendChild(tData);
        tRow.textContent = locationList[j].location; 
   }
}