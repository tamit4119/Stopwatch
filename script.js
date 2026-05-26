// In this file, you'll implement the functionality for your stopwatch.
// Here's a general outline of what you need to do:

// 1. Create variables to keep track of the stopwatch state
//    (e.g., time, isRunning, interval)

// 2. Implement functions to:
//    - Start the stopwatch
//    - Stop the stopwatch
//    - Reset the stopwatch
//    - Update the display

// 3. Add event listeners to the buttons to trigger the appropriate functions

// 4. Create a function to format the time (convert milliseconds to MM:SS:MsMs i.e 00:00:00 format)

// Remember to use clear and descriptive variable names, and add comments to explain your code.
// Good luck, and happy coding!
const toggleEl = document.getElementById("theme");
const labelEl = document.querySelector("label[for='theme']");
const displayEl = document.getElementById("display");
const startBtnEl = document.getElementById("startBtn");
const stopBtnEl = document.getElementById("stopBtn");
const resetBtnEl = document.getElementById("resetBtn");

toggleEl.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggleEl.checked);
  labelEl.textContent = toggleEl.checked ? "Dark" : "Light";
});

labelEl.textContent = "Light";

let elapsed = 0;
let startTime = 0;
let isRunning = false;
let interval = null;

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");
    const msms = String(milliseconds).padStart(2, "0");

    return `${mm}:${ss}:${msms}`;
}

function start() {
    if (isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsed;

    interval = setInterval(() => {
        elapsed = Date.now() - startTime;
        displayEl.textContent = formatTime(elapsed);
    }, 10);
}

function stop() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

function reset() {
    stop();
    elapsed = 0;
    displayEl.textContent = "00:00:00";
}

startBtnEl.addEventListener("click", start);
stopBtnEl.addEventListener("click", stop);
resetBtnEl.addEventListener("click", reset);