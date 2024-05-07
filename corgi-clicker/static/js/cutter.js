let corgiCounter = 0;
let started;

function handleClick() {
    if(!started) {
        started = new Date();
    }
    corgiCounter++;
    document.getElementById('cookie-counter').innerHTML = corgiCounter;
}

function updateClicksPerSecond() {
    let clicksPerSecond = null;
    if(started) {
        const time = new Date() - started;
        clicksPerSecond = corgiCounter / (time / 1000);
    }
    document.getElementById('cookies-per-second').innerHTML = clicksPerSecond.toFixed(1);
}

function init() {
    document.getElementById('cookie').addEventListener('click', handleClick);
    setInterval(updateClicksPerSecond, 100);
}

document.addEventListener('DOMContentLoaded', init);