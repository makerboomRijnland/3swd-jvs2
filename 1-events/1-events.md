# Events en Event Listeners

## Lesdoelen
Aan het einde van deze les kun je:
- Uitleggen wat events zijn en hoe ze werken.
- Event listeners toevoegen aan HTML-elementen.
- Event listeners verwijderen van HTML-elementen.
- Het verschil uitleggen tussen event capturing en event bubbling.
- Event propagation stoppen met `event.stopPropagation()`.

## Events

### Wat zijn Events?
Events zijn acties of gebeurtenissen die plaatsvinden in de applicatie. 
Dit kan bijvoorbeeld zijn wanneer je ergens op klikt, een pagina laadt, of een toets op je toetsenbord indrukt. 
Deze events kunnen zowel door de gebruiker als door de applicatie zelf gestart worden.

### Gebruikelijke Events:
- click: Gebeurt wanneer een element wordt geklikt.
- mouseover: De muis komt over een element heen.
- mouseout: De muis verlaat het element.
- load: Een pagina of een afbeelding is geladen.
- focus: Een input veld ontvangt focus.
- blur: Een input veld verliest focus.
- submit: Een formulier wordt verzonden.

### Oefening: Events
Zoek de lijst van events op die door een HTML-element kunnen worden gegenereerd. Noem nog vijf events die niet in de bovenstaande lijst staan.

## Event Listeners

### Wat is een Event Listener?
Een event listener is code (een functie) die wacht op een specifiek event om uitgevoerd te worden.
Het is een manier om te reageren op acties van de gebruiker of andere gebeurtenissen in de applicatie.

### Toevoegen van een Event Listener

#### Syntax
```javascript 
element.addEventListener(event, func, useCapture);
```

Om een functie te binden aan een event op een HTMLElement, gebruik je de `addEventListener` methode.
1. Het eerste argument is het event type waar je naar wilt luisteren (zoals 'click', 'mouseover', etc.)
2. het tweede argument is de functie die uitgevoerd moet worden wanneer het event plaatsvindt.
3. Het derde argument is een optionele boolean die aangeeft of de event listener in de capturing of bubbling fase moet worden uitgevoerd. (standaard is dit `false`, wat betekent dat de bubbling fase wordt gebruikt).

### Voorbeeld
```javascript
const button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick() {
  console.log('Button clicked!');
}
```

### Verwijderen van een Event Listener
Het is belangrijk om event listeners te verwijderen wanneer ze niet meer nodig zijn. Dit komt omdat event listeners geheugen gebruiken en als ze niet worden verwijderd, kunnen ze leiden tot geheugenlekkages. Dit kan de prestaties van je applicatie negatief beïnvloeden.

De `removeEventListener` methode wordt gebruikt om een event listener te verwijderen. De syntax is vergelijkbaar met `addEventListener`.

Syntax: 
```javascript
element.removeEventListener(event, func, useCapture);
```

### Oefening: Event Listeners
- Maak een HTML pagina met:
  - een checkbox met label "Listening".
  - een paragraaf met:
  ```html
  Clicked: <span id="count">0</span> times
  ```   
- Luister naar het **change** event van de checkbox.
  - Als de checkbox is aangevinkt, voeg een event listener toe aan het document dat luistert naar het **click** event. 
  - Als de checkbox is uitgevinkt, verwijder de event listener van het document.

- De event listener moet de teller in de paragraaf verhogen elke keer dat er op het document wordt geklikt (als er geluisterd wordt natuurlijk)

## Event Propagation: Bubbling en Capturing

### Wat is Event Propagation?
Een event (propageert) gaat door de DOM (Document Object Model) structuur heen. Dit proces heeft twee fases: capturing en bubbling.

1. **Capturing fase**: Deze fase begint bij het hoogste niveau van de DOM (meestal het `window` object) en gaat naar beneden naar het doel van het event. Dit betekent dat het event eerst door de parent elementen gaat voordat het het doel bereikt.   
(`window` -> `document` -> `html` -> `body` -> ... -> doel)

2. **Bubbling fase** (standaard): Na het bereiken van het doel, begint het event terug te gaan naar het hoogste niveau. Dit proces wordt bubbling genoemd. Het event gaat door elk parent element totdat het de top bereikt.  
(doel -> ... -> `body` -> `html` -> `document` -> `window`)

### Event Propagation in de Praktijk
Wanneer je een event listener toevoegt aan een element, wordt het event standaard in de bubbling fase uitgevoerd. Dit betekent dat als je op een knop klikt, het click event eerst door de parent elementen van de knop gaat voordat het de knop zelf bereikt.

### Stoppen van Event Propagation
Je kunt de propagatie van een event kunt stoppen met de `event.stopPropagation()` methode. Dit betekent dat het event niet verder zal gaan na het huidige element. Dit kan handig zijn bijvoorbeeld de validatie van een formulier waarbij je wilt voorkomen dat het formulier wordt verzonden als er fouten zijn.

```javascript
function validateForm(event) {
    const formIsValid = // .....

    if (!formIsValid) {
        event.stopPropagation();
        return;
    }

    // Verzend het formulier
}
```

### Oefening: Event Propagation
- Maak een HTML pagina met de volgende HTML-elementen:
```css
body > main > button
```
- Voeg event listeners toe aan al deze elementen (en ```document``` en ```window```.  
Voorbeeld:
```javascript
const mainElement = document.querySelector('main');
mainElement.addEventListener('click', handleMainClick);

function handleMainClick() {
  console.log('Main clicked!');
}
```
- Klik op de knop en bekijk de volgorde van de events in de console.
- Stop de event propagatie van de knop naar de body.

## Voorkomen van standaard gedrag
Sommige elementen hebben standaardgedrag dat je wilt voorkomen. Bijvoorbeeld, als je een formulier verzendt, wordt de pagina opnieuw geladen. Dit kan worden voorkomen met de `event.preventDefault()` methode. Let op dat je dit alleen doet als het nodig is, omdat het standaardgedrag van een element vaak nuttig is.

```javascript
function handleSubmit(event) {
    event.preventDefault();
    // Verzend het formulier via AJAX
}
```

### Oefening: Voorkomen van standaard gedrag
- Maak een HTML formulier met een input veld en een submit knop.
- Voeg een event listener toe aan het formulier dat luistert naar het **submit** event.
- Voorkom dat het formulier wordt verzonden en log de waarde van het input veld in de console.

## Praktische Toepassing: Interactieve Galerij
Creëer een interactieve galerij waarbij het klikken op een thumbnail de hoofdafbeelding verandert.

#### Stappen
1. Implementeer event listeners op thumbnails.  
   (Tip: querySelectorAll en for-of loop)
2. Wissel de src van de hoofdafbeelding bij klikken.
3. Gebruik event bubbling om een enkele listener op de container van de thumbnails te gebruiken.

## Bronnen
- [MDN Web Docs: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN Web Docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [MDN Web Docs: Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN Web Docs: Event Propagation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_propagation)
- [W3Schools: JavaScript Events](https://www.w3schools.com/js/js_events.asp)
- [W3Schools: JavaScript Event Propagation](https://www.w3schools.com/js/js_events.asp)
- [W3Schools: JavaScript preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp)