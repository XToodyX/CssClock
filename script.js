function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondPointer = document.getElementById('secondPointer');
    const minutePointer = document.getElementById('minutePointer');
    const hourPointer = document.getElementById('hourPointer');

    const secondAngle = seconds * 6;
    const minuteAngle = (minutes + seconds / 60) * 6 + 90; // 360 degrees / 60 minutes
    const hourAngle = (hours % 12 + minutes / 60) * 30 + 90; // 360 degrees / 12 hours

    secondPointer.style.transform = `rotate(${secondAngle + minutes * 60 * 6}deg)`;    
    minutePointer.style.transform = `rotate(${minuteAngle + hours * 60 * 6}deg)`;
    hourPointer.style.transform = `rotate(${hourAngle}deg)`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to set the clock immediately