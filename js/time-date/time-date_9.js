export function timeDate9() {
    const startButton = document.querySelector('.start');

    function parseInput(value, defaultValue = 0) {
        const num = parseInt(value);
        return isNaN(num) ? defaultValue : num;
    }


    let days = parseInput(prompt('Write days'), 0);
    let hours = parseInput(prompt('Write hours'), 0);
    let minutes = parseInput(prompt('Write minutes'), 0);
    let seconds = parseInput(prompt('Write seconds'), 0);
    updateTime();

    let interval;

    function updateTime() {

        seconds--;


        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds < 0) {
            clearInterval(interval);
            seconds = 0;
            alert("Время вышло")
            return;
        }


        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        if (minutes < 0) {
            hours--;
            minutes = 59;
        }

        if (hours < 0 && days > 0) {
            days--;
            hours = 23;
        }

        if (days <= 0) days = 0;
        if (hours <= 0 && days <= 0) hours = 0;
        if (minutes <= 0 && hours <= 0) minutes = 0;
        if (seconds < 0) seconds = 0;


        document.querySelector(".days").textContent = days;
        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;
    }

    startButton.addEventListener("click", () => {
        interval = setInterval(updateTime, 1); //чтобы не ждать
    });
}

//душная задача