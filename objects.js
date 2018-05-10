/* exported */

class CookieLocation {
    constructor(location, hours, minCustPerHr, maxCustPerHr, avgSoldPerCust, totalSoldPerHr) {
        this.location = location;
        this.hours = hours;
        this.minCustPerHr = 3;//minCustPerHr;
        this.maxCustPerHr = 18;//maxCustPerHr;
        this.avgSoldPerCust = 2;//avgSoldPerCust;
        this.totalSoldPerHr = totalSoldPerHr;
    }

    totalSold() {
        let totalSoldPerHr = Math.floor(Math.random(this.minCustPerHr) * Math.floor(this.maxCustPerHr)) * this.avgSoldPerCust;
        return totalSoldPerHr;
    }


}

let testLocation = new CookieLocation('acl', 10, 5, 25, 3);

console.log(testLocation.totalSoldPerHr);