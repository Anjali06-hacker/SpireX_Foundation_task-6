// GET HTML ELEMENTS
// Find the clock element
const clock = document.getElementById("clock");
// Find the AM/PM element
const period = document.getElementById("period");
// Find the date element
const date = document.getElementById("date");
// UPDATE CLOCK FUNCTION
// This function gets the current time and displays it
function updateClock() {
    // Create a Date object containing the current date and time
    const now = new Date();
    // GET HOURS, MINUTES AND SECONDS
    // Get the current hour
    let hours = now.getHours();
    // Get the current minutes
    let minutes = now.getMinutes();
    // Get the current seconds
    let seconds = now.getSeconds();
    // CONVERT 24-HOUR TIME TO 12-HOUR TIME
    // Store AM or PM
    let currentPeriod = "AM";
    // If the hour is 12 or greater, it is PM
    if (hours >= 12) {
        currentPeriod = "PM";
    }
    // Convert 0 to 12 for midnight
    if (hours === 0) {
        hours = 12;
    }
    // Convert hours greater than 12
    // to 12-hour format
    else if (hours > 12) {
        hours = hours - 12;
    }
    // ADD LEADING ZERO
    // Example:
    // 5 becomes 05
    // 9 becomes 09
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
        // DISPLAY TIME
    // Put the formatted time inside the clock element
    clock.textContent =
        hours + ":" + minutes + ":" + seconds;
    // Display AM or PM
    period.textContent = currentPeriod;
    // DISPLAY DATE
    // Get the current day
    const day = String(now.getDate()).padStart(2, "0");
    // Get the current month
    // JavaScript months start from 0,
    // so we add 1.
    const month =
        String(now.getMonth() + 1).padStart(2, "0");
    // Get the current year
    const year = now.getFullYear();
    // Display date in DD/MM/YYYY format
    date.textContent =
        day + "/" + month + "/" + year;
}
// RUN FUNCTION IMMEDIATELY
// Displays the time as soon as the webpage loads
updateClock();
// UPDATE CLOCK EVERY SECOND
// Run updateClock() every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);