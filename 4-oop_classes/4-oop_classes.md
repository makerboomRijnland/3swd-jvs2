# Classes

## Lesdoelen
Aan het einde van deze les kun je:
- het verschil uitleggen tussen objecten en klassen.
- objecten maken met behulp van built-in klassen.
- klassen definieren met behulp van de class syntax.
- eigenschappen en methodes toevoegen aan klassen.
- de constructor methode gebruiken om eigenschappen in te stellen.

## Objecten en Klassen

### Wat is een Object?
Een object is een verzameling van eigenschappen en methodes. Het kan worden gebruikt om gegevens te organiseren en acties uit te voeren.

```javascript
console.log() // Methode 'log' van object 'console'
document.title; // Eigenschap 'title' van object 'document'
// Eigenschap 'backgroundColor' van de 'style' van de 'body' van het 'document'
document.body.style.backgroundColor = 'red'; 
```

De syntax voor objecten is:
```javascript
const person = {
    name: 'Alice',
    age: 30
};

console.log(person.name); // Alice
``` 

### Wat is een Class?
Een class is een blauwdruk voor het maken van objecten. Het definieert de eigenschappen en methoden die een object zal hebben.

De syntax voor classes is:
```javascript
class Person {
    name;
    age;
}

const person = new Person();
```

### Oefening: Objecten en Klassen
- Maak een object `ship` met de eigenschappen `name`, `type`, en `speed`.
- Maak een class `Car` met de eigenschappen `make`, `model`, en `year`.
- Maak een object `car` van de class `Car`.
- Log de eigenschappen van `car` naar de console.

### Built-in classes
JavaScript heeft een aantal ingebouwde classes die kunnen worden gebruikt om objecten te maken. Enkele voorbeelden zijn:

- `Array`: Een class voor het maken van arrays.
- `Date`: Een class voor het maken van datums.
- `String`: Een class voor het maken van strings.
- `Number`: Een class voor het maken van getallen.
- `Object`: Een class voor het maken van objecten.

```javascript
const array = new Array();
const date = new Date();
const string = new String();
const number = new Number();
const object = new Object();
```

We kennen van een aantal van deze classes al de korte notatie:
```javascript
const array = [];
const string = '';
const number = 0;
const object = {};
```

### Oefening: Built-in classes  
- Maak een array met de getallen 1, 2, 3.
- Maak een datum object met de huidige datum en tijd.
- Maak een string object met de tekst "Hello, World!".
- Maak een nummer object met de waarde 42.
- Maak een object met de eigenschappen `name` en `age`.

Gebruik de documentatie van [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) om te leren hoe je deze built-in classes kunt gebruiken.

## Klassen definiëren
De class syntax in JavaScript maakt het gemakkelijk om klassen te definiëren. Hier is een voorbeeld van een eenvoudige class die een persoon vertegenwoordigt:

```javascript
class Person {
    name;
    age;
}

const person = new Person();
person.name = 'Alice';
person.age = 30;
```

Nu weet de interpreter en jouw editor dat er een class is met de naam `Person` die twee eigenschappen heeft: `name` en `age`.

### Oefening: Klassen definiëren
Maak een class `Group` met de volgende eigenschappen:
- `people` (een array van personen)
- `size` (het aantal mensen in de groep)

Maak een object `group` van de class `Group` en voeg een paar personen toe aan de groep. Gebruik voor personen de class `Person` die je hierboven hebt gekregen.

### Standaard waarden
Je kunt standaard waarden toekennen aan eigenschappen in de class definitie. Dit doe je door de eigenschap een waarde te geven in de class body:

```javascript
class Door {
    width = 90;
    height = 2110;
    color = 'white';
}

const group = new Door();
console.log(group.color); // 'white'
```

### Methodes
Methodes zijn functies die aan een object (of class) zijn toegevoegd. Andere termen voor methodes zijn operaties of acties, dit zijn dus dingen die een object kan doen.

#### Methodes in object
Je kunt methodes toevoegen aan een object:

```javascript
const person = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
```

#### Methodes in class
Je kunt ook methodes toevoegen aan een class, zodat alle objecten van die class de methode kunnen gebruiken:

```javascript
class Person {
    name;
    age;

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person();
person.name = 'Alice';
person.age = 30;
person.greet(); // Hello, my name is Alice and I am 30 years old.
```

### Oefening: Methodes
Breidt de Person class uit met een methode `birthday()` die de leeftijd van de persoon met 1 verhoogt.

Breidt de Group class uit met de volgende methodes:
- `addPerson(person)`
    - Voegt een persoon toe aan de groep.
    - Verhoogt de grootte van de groep met 1.
- `greets()`
    - Laat elke persoon in de groep zichzelf begroeten.

### Constructor
De constructor methode wordt automatisch aangeroepen wanneer een nieuw object van de class wordt gemaakt. Je kunt de constructor gebruiken om eigenschappen van het object in te stellen.  
De constructor kan ook argumenten accepteren die hierbij kunnen worden gebruikt. Deze argumenten worden doorgegeven wanneer een nieuw object wordt gemaakt.

```javascript
class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Alice', 30);
person.greet(); // Hello, my name is Alice and I am 30 years old.
```

### Oefening: Class constructor (*NodeJS*)
Maak een class `Song` met de volgende eigenschappen:
- `title`
- `artist`
- `duration` (in minuten)
En de methodes:
- `summary()`
    - Geeft terug: "{title} by {artist} - {duration} minutes".)"

Maak een class `Playlist` met de volgende eigenschappen:
- `songs` (een array van Song objecten)
- `currentSong` (het huidige nummer dat wordt afgespeeld)

Breidt de Playlist class uit met de volgende methodes:
- `addSong(song)`
    - Voegt een nummer toe aan de afspeellijst.
- `play()` 
    - Speelt het huidige nummer af.
    - Logt "Now playing: {title} by {artist}".
- `next()`
    - Speelt het volgende nummer af.
    - Logt "Now playing: {title} by {artist}".
- `previous()`
    - Speelt het vorige nummer af.
    - Logt "Now playing: {title} by {artist}".
- `logSongs()`
    - Logt alle nummers in de afspeellijst.
- Abstraheer "Now playing" log naar een aparte methode `logNowPlaying()`.
- Gebruik Song.summary() in de log methodes

Maak een afspeellijst met een paar nummers en test de methodes.

## Praktische toepassing: Rekenmachine (*Browser*)
Maak een HTML pagina met een paar input velden en knoppen om een rekenmachine te maken.

Maak een class `Calculator` met de volgende methodes:
- `add(augend, addend)`
    - Geeft de som van `augend` en `addend` terug.
- `subtract(minuend, subtrahend)`
    - Geeft het verschil van `minuend` en `subtrahend` terug.
- `multiply(multiplier, multiplicand)`
    - Geeft het product van `multiplier` en `multiplicand` terug.
- `divide(dividend, divisor)`
    - Geeft het quotiënt van `dividend` en `divisor` terug.
- `power(base, exponent)`
    - Geeft `base` tot de macht `exponent` terug.
- Koppel in de constructor de event listeners aan de knoppen om de methodes aan te roepen.

Maak een object `calculator` van de class `Calculator` en test functionaliteiten.

## Bronnen
- [MDN Web Docs: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Web Docs: Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
- [MDN Web Docs: Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [MDN Web Docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [W3Schools: JavaScript Classes](https://www.w3schools.com/js/js_classes.asp)