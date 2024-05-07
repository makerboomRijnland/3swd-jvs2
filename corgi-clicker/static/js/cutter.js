let corgiCounter = 0;
let started = new Date();

function handleClick() {
    corgiCounter++;
    let time = new Date() - started;
    const clicksPerSecond = corgiCounter / (time / 1000);
    document.getElementById('cookie-counter').innerHTML = corgiCounter;
    document.getElementById('cookies-per-second').innerHTML = clicksPerSecond.toFixed(1);
}

function init() {
    document.getElementById('cookie').addEventListener('click', handleClick);
}

document.addEventListener('DOMContentLoaded', init);