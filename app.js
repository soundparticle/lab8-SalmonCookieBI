/* globals locationList */

// cookiesPerHour stores data for number of cookies needed per hour
let cookiesPerHour = [];

function superFunction() {
    let body = document.querySelector('tbody');
    body.textContent = '';
    for(var i = 0; i < locationList.length; i++) {
        let tBody = document.querySelector('tbody');
        let tRow = document.createElement('tr');
        tRow.id = 'tr-' + i.toString();
        tBody.appendChild(tRow);
        locationName(i, locationList);
        cookiesNeededPerHour(i, locationList);
    }
}

// inserts location name of each cookie shop in table
function locationName(i, array) {
    let tRow = document.querySelector('#tr-' + i.toString());
    let tData = document.createElement('td');
    tData.textContent = array[i].location;
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

function newCookieInfo(e) {
    e.preventDefault();
    const location = e.target.location.value;
    const min = Number(e.target.min.value);
    const max = Number(e.target.max.value);
    const avgcookies = Number(e.target.cookies.value);
    
    const newObject = new CookieLocation(location, min, max, avgcookies);
    locationList.push(newObject);
    superFunction(locationList);
    //const newObjectArray = [newObject];
    //superFunction(newObjectArray);
    
}
const cookieShop = document.getElementById('cookie-shop');
cookieShop.addEventListener('submit', newCookieInfo);

superFunction(locationList);










