let timer;
let isRunning = false;
let seconds = 16; //  начальное значение секунд
let minutes = 51; //  начальное значение минут
let hours = 4;   //  начальное значение часов

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTimer() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        stopTimer();
        // alert("Таймер истек!");
        return;
    }

    if (seconds === 0) {
        if (minutes === 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("timer-display");
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Вызов функции startTimer() после загрузки страницы
startTimer();
