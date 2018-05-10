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
    totalSold() {
        return Math.floor(Math.random(this.minCustPerHr) * Math.floor(this.maxCustPerHr)) * this.avgSoldPerCust;
        
    }


}
// instantiating objects
let testLocation = new CookieLocation('acl', 10, 5, 25, 3);
let test = testLocation.totalSold();

// locations array
const locationList = [testLocation];
