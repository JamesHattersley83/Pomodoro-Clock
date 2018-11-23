// variables
let countdown = 0;
let default_session = 25;
let default_break = 5;
let seconds = 1500;
let isPaused = true;
let isBreak = true;

// select html and store variables
const session_decrement = document.querySelector('#session-decrement');
const session_increment = document.querySelector('#session-increment');
const break_increment = document.querySelector('#break-increment');
const break_decrement = document.querySelector('#break-decrement');
const start_btn = document.querySelector('#start_stop');
const pause_btn = document.querySelector('#pause');
const reset_btn = document.querySelector('#reset');
const time_display = document.querySelector('#time-left');
document.querySelector('#session-length').innerHTML = `${default_session}`;
document.querySelector('#break-length').innerHTML = `${default_break}`;

// event listeners for work and break
session_decrement.addEventListener('click', () => {
    if (default_session > 0) {
        default_session = default_session -5;
        document.querySelector('#session-length').innerHTML = `${default_session}`;
    }
})

session_increment.addEventListener('click', () => {
    if (default_session < 25) {
        default_session = default_session + 5;
        document.querySelector('#session-length').innerHTML = `${default_session}`;
    }
})

break_decrement.addEventListener('click', () => {
    if (default_break > 0) {
        default_break -- ;
        document.querySelector('#break-length').innerHTML = `${default_break}`;
    }
})

break_increment.addEventListener('click', () => {
    if (default_break < 5) {
        default_break ++ ;
        document.querySelector('#break-length').innerHTML = `${default_break}`;
    }
})

// functions for start and reset buttons

