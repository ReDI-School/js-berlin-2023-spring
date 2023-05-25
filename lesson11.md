<!-- .slide: id="lesson11" -->

# Basic Frontend - Spring 2023

Lesson 11, Thursday, 2023-04-20

---

### Lesson overview

* Homework questions?
* Recap: Functions
* Manipulating HTML - DOM

---

### Recap

- Function declaration and execution
- Parameters and arguments
- Returning values

---

### Quiz 1

How do I **declare or define** a function?

```js
function sum() {
  // do something
}
```
<!-- .element: class="fragment" -->

---


### Quiz 2

How do I **call or execute** this function?

```js
function sum() {
  // do something
}
```

```js
sum();
```
<!-- .element: class="fragment" -->

---

### Quiz 3

How do I add two **parameters** to this function?

```js
function sum() {
  // do something
}
sum();
```

```js
function sum(numberOne, numberTwo) {
  // do something
}
```
<!-- .element: class="fragment" -->

---

### Quiz 4

How do I add pass **arguments** to this function?

```js
function sum(numberOne, numberTwo) {
  // do something
}
sum();
```

```js
sum(2, 3);
```
<!-- .element: class="fragment" -->

---

### Quiz 5

How do I **return** the sum of the two parameters and store in a variable?

```js
function sum(numberOne, numberTwo) {
  // do something
}
sum(2, 3);
```

```js
function sum(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

let finalScore = sum(2, 3);
```
<!-- .element: class="fragment" -->

---

### Functions - Methods

When a function is a **value** in an object property, then we can call it **method**.

```js
let me = {
    goShopping: function() { console.log("ok ok I'm going shopping"); }
}
```

---

### Functions - Methods

We can also reference it:

```js
function goShopping() {
  console.log("ok ok I'm going shopping");
}

let me = {
  goShopping: goShopping
}
```

In this case, we don't call it (don't add the `()` at the end of the function name)

---

### Methods - Execution

Then, to execute it, access just like a normal object property:

```js
me.goShopping(); // prints "ok ok I'm going shopping"
```

---

### Manipulate HTML Elements from JavaScript

Let's say we have a HTML element:

```html
<div>Final score: 0</div>
```

Wouldn't it be nice if we could dynamically change that from JavaScript?

---

<!-- .slide: id="get-element" -->

### document.getElementById

One way to obtain a variable pointing to a HTML element is `document.getElementById()`:

HTML:

```html
<div id="finalScore">Final score: 0</div>
```

JavaScript:

```js
let finalScoreDiv = document.getElementById("finalScore");
```

---

`finalScoreDiv` is a variable, and its type is `object`.

How do we know which properties/methods the object has?

We could try the browser's developer tools.

Or we could check MDN:

https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement


---

<!-- .slide: id="DOM" -->

### DOM - Document Object Model

How can HTML and JavaScript communicate?

There is an interface called DOM, which communicates the HTML to a nested **object** structure.

---

![Code on the left side, and its analog DOM structure on the right](images/dom.png)

---

Let's try some properties, see what happens:

```js
let finalScoreDiv = document.getElementById("finalScore");

// choose from below:
// finalScoreDiv.textContent = "Hi from JavaScript";
// finalScoreDiv.hidden = true;
// finalScoreDiv.style.backgroundColor = "red";
// finalScoreDiv.remove();
```

---

### Interacting with buttons

HTML Buttons have a `onclick` attribute that executes JavaScript when the button is clicked:

```html
<button onclick="console.log('I was clicked!')">
  Click me!
</button>
```

However, writing JavaScript in `onclick` is rather tedious. Can you think of a better way?

---

How about calling a function instead?

```html
<button onclick="handleButtonClick()">Click me!</button>
```

In JavaScript:

```js
function handleButtonClick() { /* TODO */ }
```

---

### Example: Changing the background color

The browser provides a value in the `style.backgroundColor` property for every HTML element, for example `document.body.style.backgroundColor`.

We can assign a new one to `document.body.style.backgroundColor` to change the background color of our HTML page.

```js
// change the current color:
document.body.style.backgroundColor = "red";
// print the current color to console
console.log("The current color:", document.body.style.backgroundColor);
```

---

### Another Example: Updating message according to final score

From the previous examples, let's modify our `finalScore` code to show a different message, based on the student's final score.

If the score is higher than 6, then change the `textContent` to "Congratulations! You passed". Otherwise, change it to "Sorry, try again."

---

### Task 1

In HTML, create a `div` element and a `button`.

When the user clicks the button, set the background color of the `div` to red.

---

### Task 2

In HTML, create a `button` and a `div` element.

When the user clicks the button, update the `textContent` of the `div` element with the amount of times the user has clicked the button.

Example: "You clicked 12 times"

---
