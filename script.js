"use strict"

const oneSecond = 1000; // 1000 milliseconds are equal to 1 second
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let hh = 0;
let mm = 0;
let ss = 0;
let chronometer;

pauseBtn.disabled = true;
resetBtn.disabled = true;

// The chronometer starts counting
function start() {
    timer();
    chronometer = setInterval(timer, oneSecond);
    startBtn.disabled = true; // Disables the "Start" button after clicked because it has no functionality before pressing "Pause" or "Reset" button
    pauseBtn.disabled = false; // Enables the "Pause" button
    resetBtn.disabled = false; // Enables the "Reset" button
    background.style.animation = "ground 60s linear infinite"; // Start the animation
    background.style.webkitAnimation = "ground 60s linear infinite";
}

// The chronometer pauses the counting
function pause() {
    clearInterval(chronometer);
    startBtn.disabled = false;
    background.style.animationPlayState = "paused"; // Stop the animation
    background.style.webkitAnimationPlayState = "paused";
}

// The chronometer resets it's counting
function reset() {
    clearInterval(chronometer);
    hh = 0;
    mm = 0;
    ss = 0;
    counter.innerText = "00:00:00";
    startBtn.disabled = false;
    pauseBtn.disabled = true; // Disables the "Pause" button after clicked because it has no functionality before pressing "Start" button
    resetBtn.disabled = true; // Disables the "Reset" button after clicked because it has no functionality before pressing "Start" button
    background.style.animationPlayState = "paused"; // Stop the animation
    background.style.webkitAnimationPlayState = "paused";
}

function timer() {
    ss++;
    if (ss == 60) { // Seconds will be counted until it reaches 59, then one minute is added
        ss = 0;
        mm++;
        if (mm == 60) { // Minutes will be counted until it reaches 59, the one hour is added
            mm = 0;
            hh++;
            if (hh == 100) { // Hours will be counted until it reaches 99, then the chronometer will be reseted
                reset();
            }
        }
    }

    // Numbers from 0 to 9 at seconds, minutes and hours will be preceded by the string "0"
    const format = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    counter.innerText = format;

    return format;
}