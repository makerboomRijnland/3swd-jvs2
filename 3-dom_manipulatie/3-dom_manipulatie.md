# DOM Manipulatie

## Lesdoelen
Aan het einde van deze les kun je:
- classList gebruiken om klassen toe te voegen, te verwijderen en te togglen.
- de DOM bevragen met bijv. ```contains```, ```matches```, en ```querySelector```.
- de DOM manipuleren met bijv. ```createElement```, ```appendChild```, ```removeChild```, en ```replaceChild```.
- de DOM doorlopen met ```parentNode```, ```children```, en ```siblings```.

## classList

### Wat is classList?
De `classList` eigenschap van een element geeft een lijst van alle klassen van dat element. Het is een object met methoden om klassen toe te voegen, te verwijderen en te togglen.

### Methoden
- `add(className)`: Voegt een klasse toe aan het element.
- `remove(className)`: Verwijdert een klasse van het element.
- `toggle(className)`: Voegt een klasse toe als deze ontbreekt, en verwijdert deze als deze aanwezig is.
- `contains(className)`: Controleert of het element de opgegeven klasse heeft.

### Voorbeeld
```javascript
const element = document.querySelector('.element');
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('hidden');
```

### Oefening: classList
- Maak een HTML pagina met een knop en een paragraaf, geef de paragraaf de klasse 'pizza'.
- Voeg een event listener toe aan de knop die de klasse 'hidden' toevoegt aan de paragraaf wanneer erop geklikt wordt.
- Voeg een event listener toe aan de paragraaf die de klasse 'hidden' verwijdert wanneer erop geklikt wordt.
- Maak een animatie met @keyframes en koppel die aan de 'pizza' klasse.

## DOM Querying

### Wat is DOM Querying?
DOM Querying is het proces van het selecteren van HTML-elementen in de DOM (Document Object Model) met behulp van JavaScript.

### Methoden
- `querySelector(selector)`: Geeft het eerste element terug dat overeenkomt met de opgegeven selector.
- `querySelectorAll(selector)`: Geeft een lijst van alle elementen terug die overeenkomen met de opgegeven selector.
- `matches(selector)`: Controleert of het element overeenkomt met de opgegeven selector.
- `closest(selector)`: Zoekt naar het dichtstbijzijnde ouder element dat overeenkomt met de opgegeven selector.

### Voorbeeld
```javascript
const element = document.querySelector('.element');
const elements = document.querySelectorAll('.elements');
const isMatch = element.matches('.element');
const parent = element.closest('.parent');
```

### Oefening: DOM Querying


## DOM Manipulatie

### Wat is DOM Manipulatie?
DOM Manipulatie is het proces van het wijzigen van de structuur, inhoud of stijl van HTML-elementen in de DOM (Document Object Model) met behulp van JavaScript.

### Methoden
- `createElement(tagName)`: Maakt een nieuw element met de opgegeven tag.  
```javascript
const article1 = document.createElement('article');
```
- `appendChild(child)`: Voegt een element toe als een kind van een ander element.  
```javascript
document.body.appendChild(article1);
```
- `removeChild(child)`: Verwijdert een element uit de DOM.
```javascript
document.body.removeChild(article1);
```
- `replaceChild(newChild, oldChild)`: Vervangt een element door een ander element.
```javascript
document.body.replaceChild(article1, article2);
```

### Oefening: DOM Manipulatie
- Maak een HTML pagina met:
    - Een lege lijst
    - Een formulier met een tekstinvoer en een knop
- Voeg een click event listener toe aan de knop die:
    - Een nieuwe lijstitem maakt, met de tekst van het invoerveld en toevoegt aan de lijst.
    - Het invoerveld leegmaakt.

## DOM Traversing

### Wat is DOM Traversing?

DOM Traversing is het proces van het navigeren door de DOM (Document Object Model) van een element naar zijn ouders, kinderen en broers en zussen.

### Eigenschappen
- `parentNode`: Geeft het ouder element van het huidige element.
```javascript
const htmlElement = document.body.parentNode;
```
- `children`: Geeft een lijst van alle kinderen van het huidige element.
```javascript
const headElement = document.body.parentNode.children;
```
- `previousElementSibling`: Geeft het vorige broertje van het huidige element.
```javascript
const headElement = document.body.previousElementSibling;
```
- `nextElementSibling`: Geeft het volgende broertje van het huidige element.
```javascript
const bodyElement = document.head.nextElementSibling;
```

### Oefening: DOM Traversing
- Maak een HTML pagina met:
    - Een lijst met items
    - Een knop "Verwijder eerste item"
    - Een knop "Verwijder laatste item"
    - Een knop "Verwijder eerste item"
- Voeg een click event listener toe aan de knop die:
    - Het eerste item van de lijst verwijdert.

## Bronnen
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [W3Schools](https://www.w3schools.com/js/js_htmldom.asp)
- [JavaScript.info](https://javascript.info/dom-navigation)
- [MDN Web Docs: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN Web Docs: Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN Web Docs: Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Web Docs: Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN Web Docs: Node.removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [MDN Web Docs: Node.replaceChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
- [MDN Web Docs: Node.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
- [MDN Web Docs: ParentNode.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)