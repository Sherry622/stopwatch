let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displaymiliSeconds = 0;

let status = 'Stopped';
let interval = '';

function StartWatch() {
    miliseconds++;

    if (miliseconds == 100) {
        miliseconds = 0;
        seconds++

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    if (miliseconds < 10) {
        displaymiliSeconds = '0' + miliseconds.toString();
    }
    else {
        displaymiliSeconds = miliseconds;
    }
    if (seconds < 10) {
        displaySeconds = '0' + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = '0' + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = '0' + hours.toString();
    }
    else {
        displayHours = hours;
    }

    document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displaymiliSeconds;
}

function startstop() {
    if (status == 'Stopped') {
        interval = window.setInterval(StartWatch, 10);
        document.getElementById('handler').innerHTML = 'Stop';
        status = 'Started';
    }
    else if (status == 'Started') {
        window.clearInterval(interval);
        document.getElementById('handler').innerHTML = 'Start';
        status = 'Stopped';
    }
}

function reset() {
    miliseconds=0;
    seconds = 0;
    hours = 0;
    minutes = 0;
    window.clearInterval(interval);
    document.getElementById('display').innerHTML = '00:00:00:00';
    document.getElementById('handler').innerHTML = 'Start';
    status = 'Stopped';
}