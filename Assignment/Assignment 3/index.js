const showTimeButton = document.getElementById("show-time-button");
const clock = document.getElementById("clock");

showTimeButton.addEventListener("click", function() {
    updateTime(); // update the time
    clock.style.display = "block"; // show the clock
});

function updateTime() {
    const date = new Date(); // get the current time
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let meridiem = "";

    if (hours >= 12) {
        meridiem = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else {
        meridiem = "AM";
        if (hours == 0) {
            hours = 12;
        }
    }

    const timeString = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)} ${meridiem}`; // format the time

    clock.textContent = timeString; // display the time in the <div> element
}

function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number; // add a leading zero if necessary
}

clock.style.display = "none"; // hide the clock initially
showTimeButton.focus(); // set focus on the button when the page loads

setInterval(updateTime, 1000); // update the clock every second
