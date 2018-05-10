/* exported locationList */

// class constructor 
class CookieLocation {
    constructor(location, hours, minCustPerHr, maxCustPerHr, avgSoldPerCust) {
        this.location = location;
        this.hours = hours;
        this.minCustPerHr = minCustPerHr;
        this.maxCustPerHr = maxCustPerHr;
        this.avgSoldPerCust = avgSoldPerCust;
        
    }
// returns total cookies needed per hour
    totalNeeded() {
        return Math.floor(Math.random(this.minCustPerHr) * Math.floor(this.maxCustPerHr)) * this.avgSoldPerCust;
        
    }

}
// instantiating objects
let testLocation = new CookieLocation('acl', [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8], 5, 25, 3);

// locations array
const locationList = [testLocation];
