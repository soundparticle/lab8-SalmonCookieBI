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
        const min = Math.ceil(this.minCustPerHr);
        const max = Math.floor(this.maxCustPerHr);
        return Math.floor(Math.random() * (max - min + 1)) + min * this.avgSoldPerCust;
    }
}
// instantiating objects
let pdxAirport = new CookieLocation('PDX Airport', ['6:00', '7:00'], 23, 65, 6.3);
let pioneerSquare = new CookieLocation('Pioneer Square', ['9:00', '12:00'], 3, 24, 1.2);
let powells = new CookieLocation('Powell\'s', ['11:00'], 11, 38, 3.7);
let stJohns = new CookieLocation('St. Johns', ['8:00'], 20, 38, 2.3);
let waterfront = new CookieLocation('Waterfront', ['10:00'], 2, 16, 4.6);

// An array of all our objects
const locationList = [pdxAirport, pioneerSquare, powells, stJohns, waterfront];
