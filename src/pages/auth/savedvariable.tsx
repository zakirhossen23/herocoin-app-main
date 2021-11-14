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

export const allstorednumbers = [23, 23232, 232423, 34534];

export const gotnumbers = {
    first: 6,
    second: 7,
    third: 3,
    fourth: 7,
    five: 9

}
