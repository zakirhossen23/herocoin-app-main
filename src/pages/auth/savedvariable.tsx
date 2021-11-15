export const users = {
    firstname: "",
    lastname: ""
}
export const address = {
    street1: "",
    street2: "",
    city: "",
    state: "",
    Country: ""
}
export const Payments = {
    nameoncard: "",
    cardnumber: "",
    expirydate: "",
    cvv: ""
}
// Get current date and time
var today = new Date();

// Get number of days to Friday
var dayNum = today.getDay();
var daysToFri = 5 - (dayNum < 5 ? dayNum : dayNum - 7);

// Get milliseconds to noon friday
var fridayNoon = new Date(+today);
fridayNoon.setDate(fridayNoon.getDate() + daysToFri);
fridayNoon.setHours(12, 0, 0, 0);
// Round up ms remaining so seconds remaining matches clock
var ms = Math.ceil((fridayNoon.getTime() - today.getTime()) / 1000) * 1000;
var d = ms / 8.64e7 | 0;
var h = (ms % 8.64e7) / 3.6e6 | 0;
var m = (ms % 3.6e6) / 6e4 | 0;
var s = (ms % 6e4) / 1e3 | 0;

export const allstorednumbers = [0];
function winnernumber() {
    var daysToFri = 5 - (dayNum < 5 ? dayNum : dayNum - 7);

    if (d <= 0 && daysToFri === 0) {
        gotnumbers.first = Math.floor(Math.random() * 100) + 10;
        gotnumbers.second = Math.floor(Math.random() * 100) + 10;
        gotnumbers.third = Math.floor(Math.random() * 100) + 10;
        gotnumbers.fourth = Math.floor(Math.random() * 100) + 10;
    }
}

export const gotnumbers = {
    first: 63,
    second: 27,
    third: 63,
    fourth: 87

}
