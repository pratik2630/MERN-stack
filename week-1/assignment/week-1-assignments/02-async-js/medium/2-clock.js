// Function to pad single digit numbers with a leading zero
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Function to get the current time in both 24-hour and 12-hour formats
function getCurrentTime() {
    const now = new Date();
    const hours24 = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    // 24-hour format
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12-hour format
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // The hour '0' should be '12'
    const time12 = `${pad(hours12)}:${minutes}:${seconds} ${ampm}`;

    return { time24, time12 };
}

// Function to update the clock
function updateClock() {
    const { time24, time12 } = getCurrentTime();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
