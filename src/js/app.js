// variables
const countdown = 0;
const default_session = 25;
const default_break = 5;
let seconds = 1500;
let isPaused = true;
let isStart = true;

// select html and store variables
const session_decrement = document.querySelector('#session-decrement');
const session_increment = document.querySelector('#session-increment');
const break_increment = document.querySelector('#break-increment');
const break_decrement = document.querySelector('#break-decrement');
const start_btn = document.querySelector('#start_stop');
const pause_btn = document.querySelector('#pause');
const reset_btn = document.querySelector('#reset');
const time_display = document.querySelector('#time-left');
document.querySelector('#session-length').innerHTML = '25';
document.querySelector('#break-length').innerHTML = '5';

// event listeners
session_decrement.addEventListener('click', function(){
    console.log('button clicked');
})

// functions

