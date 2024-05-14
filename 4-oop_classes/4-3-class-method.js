class Person {
    age;
    name;

    greet() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`
        );
    }

    birthday() {
        this.age += 1;
    }
}

const alice = new Person();
alice.name = "Alice";
alice.age = 30;
// person.greet();
// person.birthday();
// person.greet();

class Group {
    people = [];
    size = 0;

    addPerson(person) {
        this.people.push(person);
        this.size++;
    }
}

const group1 = new Group();
console.log(group1.size);

group1.addPerson(alice);
console.log(group1.size);