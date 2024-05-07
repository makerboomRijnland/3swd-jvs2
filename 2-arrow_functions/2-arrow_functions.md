# Arrow Functions

## Lesdoelen
Aan het einde van deze les kun je:
- Uitleggen wat arrow functions zijn en hoe ze werken.
- Het verschil uitleggen tussen arrow functions en reguliere functies.
- De syntax van arrow functions toepassen.
- Arrow functions gebruiken als callback functies.
- Arrow functions gebruiken in combinatie met array methods.

## Arrow Functions
Arrow functions zijn een nieuwe manier om functies te definiëren in JavaScript. 
Ze hebben vergeleken met 'normale' functies de volgeende kenmerken:
- Ze zijn korter en hebben een andere syntax.
- Ze zijn anoniem.
- Ze hebben geen eigen `this`-context en gebruiken de `this` van de omliggende scope.

Deze kenmerken maken arrow functions handig voor callback functies.

### Syntax
De syntax van een arrow function is als volgt:
```javascript
const add = (a, b) => a + b;
```

Deze syntax bestaat uit:
1. De parameters van de functie, tussen haakjes.
2. De arrow operator `=>`.
3. De body van de functie, die de waarde van de expressie aan de rechterkant van de `=>` teruggeeft.

### Voorbeeld
```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5
```

### Oefening: Arrow Functions
Schrijf de volgende functies om als arrow functions:
1. Een functie die een getal verdubbelt.
    a. 2 -> 4
    b. 3 -> 6
2. Een functie die controleert of een getal even is.
    a. 2 -> true
    b. 3 -> false
3. Een functie die de som van een array van getallen berekent.
    a. [1, 2, 3, 4, 5] -> 15
    b. [2, 4, 6, 8, 10] -> 30

## Geen `this`-context
Arrow functions hebben geen eigen `this`-context. 
In plaats daarvan gebruiken ze de `this` van de omliggende scope. 
Dit betekent dat arrow functions handig zijn wanneer je de `this` van de omliggende scope wilt gebruiken in plaats van de `this` van de functie zelf.

### Voorbeeld
```javascript
const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Output: Hello, my name is John
```

In dit voorbeeld gebruikt de `sayHello` methode de `this` van het `person` object om de naam van de persoon te loggen.

### Arrow Functions en `this`
Als we de `sayHello` methode zouden herschrijven als een arrow function, zou de `this` in de arrow function verwijzen naar de `this` van de omliggende scope (de globale scope in dit geval), in plaats van naar het `person` object.

```javascript
const person = {
  name: 'John',
  sayHello: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Output: Hello, my name is undefined
```

In dit geval is de output `undefined`, omdat de `this` in de arrow function verwijst naar de globale scope, waar `name` niet gedefinieerd is.

## Oefening: Arrow Functions en `this`
Gegeven het volgende object:
```javascript
const product = {
  name: 'iPhone 19',
  price: 5899,
  log: function() {
    console.log(`${this.name} @ Price: ${this.price}`);
  }
};
```

Herschrijf de `log` methode als een arrow function en roep de methode aan. Wat is de output?

### Wanneer Arrow Functions Gebruiken?
Arrow functions zijn handig in situaties waarin je de `this` van de omliggende scope wilt gebruiken, zoals in callback functies.

## Callback Functies

### Wat zijn Callback Functies?
Een callback functie is een functie die als argument wordt doorgegeven aan een andere functie en later wordt uitgevoerd.  
Callback functies worden vaak gebruikt in JavaScript om asynchrone code te schrijven, zoals het ophalen van data van een server of het uitvoeren van een animatie.

### Voorbeeld
```javascript
function fetchData(callback) {
  // De setTimeout functie simuleert een asynchrone operatie
  setTimeout(() => {
    const data = 'Data from server';
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);
```

In dit voorbeeld wordt de `fetchData` functie gebruikt om data van een server op te halen. De `displayData` functie wordt doorgegeven als callback functie en wordt uitgevoerd wanneer de data is opgehaald.

## Oefening: Callback Functies
Schrijf een functie `doSomething` die een callback functie als argument verwacht en de callback functie aanroept.


### Callbacks en Events
In JavaScript worden callback functies vaak gebruikt in combinatie met events.  
Bijvoorbeeld, wanneer je een event listener toevoegt aan een HTML element, geef je een callback functie door die wordt uitgevoerd wanneer het event plaatsvindt.

### Voorbeeld
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```

In dit voorbeeld wordt een anonieme functie doorgegeven als callback functie aan de `addEventListener` methode.

## Oefening: Callbacks en Events
Voeg een event listener toe aan een HTML button element en geef een callback functie door die een bericht logt wanneer de button wordt geklikt.

### Arrow Functions als Callbacks
Arrow functions zijn handig als callback functies vanwege hun korte syntax en het feit dat ze geen eigen `this`-context hebben.
Bijvoorbeeld als je vanuit een object een methode wilt doorgeven als callback functie, kun je een arrow function gebruiken om de `this` van het object te behouden.

### Voorbeeld
```javascript
const person = {
  name: 'John',
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const button = document.querySelector('button');
button.addEventListener('click', () => person.sayHello());
```

In dit voorbeeld wordt de `sayHello` methode van het `person` object doorgegeven als callback functie aan de event listener.

### Voorbeeld foutieve this
Het volgende werkt niet, omdat de `this` in de `sayHello` methode niet meer verwijst naar het `person` object zodra de methode als callback functie word aangeroepen:

```javascript
button.addEventListener('click', person.sayHello); 
```

In dit geval zal de `this` in de `sayHello` methode verwijzen naar het `button` element in plaats van het `person` object.

### Oefening: Arrow Functions als Callbacks
Gegeven het volgende object:
```javascript
const product = {
  name: 'iPhone 19',
  price: 5899,
  log: function() {
    console.log(`${this.name} @ Price: ${this.price}`);
  }
};
```

Voeg een event listener toe aan een HTML button element en gebruik een arrow function als callback functie om de `log` methode van het `product` object aan te roepen.

## Arrow Functions en Array Methods
Arrow functions zijn handig in combinatie met array methods zoals `map`, `filter`, en `reduce`.

### Voorbeeld
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const even = numbers.filter(number => number % 2 === 0);
console.log(even); // Output: [2, 4]

const sum = numbers.reduce((accumulation, number) => accumulation + number, 0);console.log(sum); // Output: 15
```

In dit voorbeeld worden de `map`, `filter`, en `reduce` methodes gebruikt in combinatie met arrow functions om een array van getallen te verdubbelen, de even getallen te filteren, en de som van de getallen te berekenen.

### Oefening: Arrow Functions en Array Methods
Gegeven de volgende array van getallen:
```javascript
const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
```

Gebruik arrow functions en array methods om de volgende resultaten te bereiken:
1. Verdubbel elk getal in de array.
2. Filter de getallen die deelbaar zijn door 3.
3. Bereken de som van de getallen in de array.

## Praktische Toepassing: Interactieve Quiz
In de volgende oefening gaan we een interactieve quiz maken met behulp van arrow functions en event listeners.

### Stappen
1. Maak een HTML pagina met de volgende elementen:
    - Een `main` element met de id "quiz".
      - Een `h1` element met de tekst "Quiz".
      - Een `ul` element met de volgende vragen:
          - "Wat is de hoofdstad van Nederland?"
          - "Hoeveel dagen heeft een week?"
          - "Wat is de hoofdstad van Frankrijk?"
      - Geef elke vraag een `input` element om het antwoord in te voeren.
      - Een `button` element met de tekst "Check antwoorden".
      - Een `p` element met de tekst "Resultaat: ".
2. Maak en koppel een JavaScript bestand met de volgende functionaliteit:
    - Maak een object `quiz` met de volgende eigenschappen:
        - `answers`: een array van antwoorden.
        - `checkAnswers`: een arrow function die de antwoorden controleert en het resultaat weergeeft.
    - Voeg event listeners toe aan de vragen en de button.
    - Gebruik arrow functions om de antwoorden te controleren en het resultaat weer te geven.
    - Gebruik voor het uitlezen van de inputs de querySelectorAll methode en een for-of loop.

## Bronnen
- [MDN Web Docs: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Web Docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN Web Docs: Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3Schools: JavaScript Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp)
- [JavaScript.info: Arrow functions](https://javascript.info/arrow-functions-basics)
- [JavaScript.info: Function expressions and arrows](https://javascript.info/function-expressions-arrows)
- [JavaScript.info: Advanced working with functions](https://javascript.info/advanced-functions)