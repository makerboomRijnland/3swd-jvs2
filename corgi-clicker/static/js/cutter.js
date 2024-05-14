const products = [
    { id: "paw", name: "Paw", cost: 10, interval: 10000 },
    { id: "ancient-corgi", name: "Ancient Corgi", cost: 100, interval: 1000 },
    { id: "co-kart", name: "Co-Kart", cost: 1000, interval: 100 },
    { id: "astro-corgi", name: "AstroCorgi", cost: 10000, interval: 10 },
];

class CorgiClicker {
    clicks = 0;
    started;

    constructor() {
        document
            .getElementById("cookie")
            .addEventListener("click", () => this.handleClick());

        setInterval(() => this.updateClicksPerSecond(), 100);
        this.updateProducts();
    }

    handleClick() {
        if (!this.started) {
            this.started = new Date();
        }
        this.clicks++;
        document.getElementById("cookie-counter").innerHTML = this.clicks;
        this.updateProducts();
    }

    updateProducts() {
        for (const product of products) {
            const element = document.getElementById(product.id);
            if (this.clicks < product.cost) {
                element.classList.add("locked");
            } else {
                element.classList.remove("locked");
            }
        }
    }

    updateClicksPerSecond() {
        let clicksPerSecond = 0;
        if (this.started) {
            const time = new Date() - this.started;
            clicksPerSecond = this.clicks / (time / 1000);
        }
        document.getElementById("cookies-per-second").innerHTML =
            clicksPerSecond.toFixed(1);
    }
}

document.addEventListener("DOMContentLoaded", () => new CorgiClicker());

