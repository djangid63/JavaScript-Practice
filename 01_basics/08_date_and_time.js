// Notes on date and time in JS:
// 1. Date is a built-in object in JS
// 2. Date object is used to work with dates and times
// 3. Date objects are created with the new Date() constructor
// 4. Date objects can only be created by calling the new Date() constructor
// 5. Date objects are static. The computer time is ticking, but date objects are not
// 6. Date objects can only be compared using the getTime() method
// 7. Date objects do not have a literal representation
// 8. Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC
// 9. Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects
// 10. Date objects can only be compared using the getTime() method
// 11. The getFullYear() method returns the year of a date as a four digit number
// 12. The getMonth() method returns the month of a date as a number (0-11)
// 13. The getDate() method returns the day of a date as a number (1-31)
// 14. The getHours() method returns the hours of a date as a number (0-23)
// 15. The getMinutes() method returns the minutes of a date as a number (0-59)
// 16. The getSeconds() method returns the seconds of a date as a number (0-59)
// 17. The getMilliseconds() method returns the milliseconds of a date as a number (0-999)
// 18. The getDay() method returns the weekday of a date as a number (0-6)
// 19. The Date.parse() method parses a date string and returns the number of milliseconds since January 1, 1970
// 20. The Date.UTC() method returns the number of milliseconds in a date string since midnight of January 1, 1970, according to universal time
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

