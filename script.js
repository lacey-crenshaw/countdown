const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const halloween = "31 Oct 2021";

function countDown() {
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();

    const totalSeconds = (halloweenDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl
    hoursEl
    minsEl
    secondsEl.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}

// initial call
countDown();

setInterval(countDown, 1000);