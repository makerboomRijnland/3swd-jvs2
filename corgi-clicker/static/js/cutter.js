class CorgiClicker {
    clicks = 0;
    started;

    constructor() {
        document.getElementById('cookie').addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        if (!this.started) {
            this.started = new Date();
        }
        this.clicks++;
        document.getElementById("cookie-counter").innerHTML = this.clicks;
        updateProducts();
    }


}

document.addEventListener("DOMContentLoaded", () => new CorgiClicker());



// let corgiCounter = 0;
// let started;
// const products = [
//     { id: "paw", name: "Paw", cost: 10, interval: 10000 },
//     { id: "ancient-corgi", name: "Ancient Corgi", cost: 100, interval: 1000 },
//     { id: "co-kart", name: "Co-Kart", cost: 1000, interval: 100 },
//     { id: "astro-corgi", name: "AstroCorgi", cost: 10000, interval: 10 },
// ];

// function handleClick() {
//     if (!started) {
//         started = new Date();
//     }
//     corgiCounter++;
//     document.getElementById("cookie-counter").innerHTML = corgiCounter;
//     updateProducts();
// }

// function updateClicksPerSecond() {
//     let clicksPerSecond = 0;
//     if (started) {
//         const time = new Date() - started;
//         clicksPerSecond = corgiCounter / (time / 1000);
//     }
//     document.getElementById("cookies-per-second").innerHTML =
//         clicksPerSecond.toFixed(1);
// }

// function updateProducts() {
//     for (const product of products) {
//         const element = document.getElementById(product.id);
//         if (corgiCounter < product.cost) {
//             element.classList.add("locked");
//         } else {
//             element.classList.remove("locked");
//         }
//     }
// }

// function init() {
//     document.getElementById("cookie").addEventListener("click", handleClick);
//     setInterval(updateClicksPerSecond, 100);
//     updateProducts();
// }

// document.addEventListener("DOMContentLoaded", () => new CorgiClicker());

// class CorgiClicker {
//     started;

//     constructor() {
        
//     }

//     click() {
//         let clicksPerSecond = 0;

//         if (this.started) {
//             const time = new Date() - started;
//             clicksPerSecond = corgiCounter / (time / 1000);
//         }

//         document.getElementById("cookies-per-second").innerHTML =
//             clicksPerSecond.toFixed(1);
//     }
// }
