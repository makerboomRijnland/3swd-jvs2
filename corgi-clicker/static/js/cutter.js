let corgiCounter = 0;

function handleClick() {
    corgiCounter++;
    document.getElementById('cookie-counter').innerHTML = corgiCounter;
}

function init() {
    document.getElementById('cookie').addEventListener('click', handleClick);
}

document.addEventListener('DOMContentLoaded', init);