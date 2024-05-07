let corgiCounter = 0;
let started = new Date();

function handleClick() {
    corgiCounter++;
    document.getElementById('cookie-counter').innerHTML = corgiCounter;
}

function updateClicksPerSecond() {
    const time = new Date() - started;
    const clicksPerSecond = corgiCounter / (time / 1000);
    document.getElementById('cookies-per-second').innerHTML = clicksPerSecond.toFixed(1);
}

function init() {
    document.getElementById('cookie').addEventListener('click', handleClick);
    setInterval(updateClicksPerSecond, 100);
}

document.addEventListener('DOMContentLoaded', init);