const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = ((seconds / 60) * 360) + 90; // We add 90 degrees to offset the default 90 degrees that we previously added in CSS
    const minsDegree = ((minutes / 60) * 360) + 90;
    const hourDegree = ((hours / 12) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`; // Rotates the seconds hand using template literals and the rotate()deg function
    minuteHand.style.transform = `rotate(${minsDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// Set Interval will call the setDate function every second (1000 miliseconds)
setInterval(setDate, 1000);