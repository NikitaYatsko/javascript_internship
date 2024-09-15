export function timeDate8() {

    let interval;

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString();
        const minutes = now.getMinutes().toString();
        const seconds = now.getSeconds().toString();

        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;

    }

    const buttonStart = document.querySelector(".start");
    buttonStart.addEventListener('click', () => {
        interval = setInterval(updateTime, 1000);
    });
    const stopButton = document.querySelector(".stop")
    stopButton.addEventListener("click", () => {
        clearInterval(interval);
    });

}