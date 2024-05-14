const ship = {
    name: 'Titanic',
    type: 'Inter-continental',
    speed: 50
};

console.log(`${ship.type} ship ${ship.name} @ ${ship.speed} km/h`);

class Car {
    make;
    model;
    year;
}

const car = new Car();
car.make = "Maybach";
car.model = "GLS 600";
car.year = 2023;

console.log(`${car.make} - ${car.model} from ${car.year}`);