// variables
let countdown = 0;
let default_session = 25;
let default_break = 5;
let isPaused = false;
let isBreak = true;
let seconds = 1500;

// select html and store variables
const session_decrement = document.querySelector("#session-decrement");
const session_increment = document.querySelector("#session-increment");
const break_increment = document.querySelector("#break-increment");
const break_decrement = document.querySelector("#break-decrement");
const start_btn = document.querySelector("#start_stop");
const pause_btn = document.querySelector("#pause");
const reset_btn = document.querySelector("#reset");
const time_display = document.querySelector("#time-left");
document.querySelector("#session-length").innerHTML = `${default_session}`;
document.querySelector("#break-length").innerHTML = `${default_break}`;

// event listeners for work and break
session_decrement.addEventListener("click", () => {
  if (default_session > 5) {
    default_session = default_session - 5;
    document.querySelector("#session-length").innerHTML = `${default_session}`;
  }
});

session_increment.addEventListener("click", () => {
  if (default_session < 25) {
    default_session = default_session + 5;
    document.querySelector("#session-length").innerHTML = `${default_session}`;
  }
});

break_decrement.addEventListener("click", () => {
  if (default_break > 1) {
    default_break--;
    document.querySelector("#break-length").innerHTML = `${default_break}`;
  }
});

break_increment.addEventListener("click", () => {
  if (default_break < 5) {
    default_break++;
    document.querySelector("#break-length").innerHTML = `${default_break}`;
  }
});

// create object to hold variables and methods

const pomoTimer = function() {
  let lastBeganTimeStamp;
  let isPaused = true;
  let thenSeconds;
  let secondsLeft;
  let initialSeconds;

  function init(seconds) {
    secondsLeft = seconds;
    initialSeconds = seconds;
  }

  function start() {
    thenSeconds = Date.now() + secondsLeft * 1000;
    isPaused = false;
  }

  function pause() {
    isPaused = true;
  }

  function reset() {
    isPaused = true;
    secondsLeft = initialSeconds;
  }

  function run() {
    if (!isPaused) {
      secondsLeft = Math.round((thenSeconds - Date.now()) / 1000);

      if (secondsLeft < 0) {
        isPaused = true;
        secondsLeft = initialSeconds;
      }
    }
  }

  function getSecondsLeft() {
    return secondsLeft;
  }

  return {
    init,
    start,
    pause,
    reset,
    run,
    getSecondsLeft
  };
};

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}`;
  time_display.textContent = display;
}

// instantiate new timer object

myTimer = new pomoTimer();
myTimer.init(seconds);

countdown = setInterval(() => {
  myTimer.run();
  displayTimeLeft(myTimer.getSecondsLeft());
}, 1000);

start_btn.addEventListener("click", () => {
  // start timer
  myTimer.start();
});

pause_btn.addEventListener("click", () => {
  // pause timer
  myTimer.pause();
});

reset_btn.addEventListener("click", () => {
  // reset timer
  myTimer.reset();
});

// functions for start and reset buttons

// function updateSeconds(newSessionLength) {
//   seconds = newSessionLength * 60;
// }

// function timer(seconds) {
//   const now = Date.now();
//   const then = now + seconds * 1000;
//   displayTimeLeft(seconds);

//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);
//     // check if we need to stop the timer
//     if (secondsLeft < 0) {
//       document.querySelector("#timer-label").textContent = "Break Time";
//       clearInterval(countdown);
//     }
//     // display seconds
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }
