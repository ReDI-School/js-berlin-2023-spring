<!-- .slide: id="lesson12" -->

# Basic Frontend - Spring 2023

Lesson 12, Tuesday, 2023-04-25

---

### Agenda
- Recap: HTML and Javascript
- Input element
- More practice with DOM and functions

---

### Quiz 1

How do we point the element below in JavaScript?


```html
<div id="finalScore">Final score: 0</div>
```

In JavaScript:
```js
let finalScoreDiv = document.getElementById("finalScore");
```
<!-- .element: class="fragment" -->

---

### Quiz 2

How can we change the text from the HTML element?

```js
let finalScoreDiv = document.getElementById("finalScore");
```

```js
finalScoreDiv.textContent = "new text!";
```
<!-- .element: class="fragment" -->

Remember: Every element is an object with **properties** and **methods** that we can access, modify and execute.
<!-- .element: class="fragment" -->

---


### Quiz 3

How can we add an action when the button is clicked?

```html
<button>Click me!</button>
```

```html
<button onclick="handleButtonClick()">Click me!</button>
```
<!-- .element: class="fragment" -->

---

### Quiz 4

How can we print a message in the console when the button is clicked?

```html
<button onclick="handleButtonClick()">Click me!</button>
```

In javascript:

```js
function handleButtonClick() {
  console.log("The button was clicked!");
}
```
<!-- .element: class="fragment" -->

---

### Input element

The input element can also be pointed in JavaScript. And we use `document.getElementById()` as usual.

In HTML:
```html
<input id="scoreInput" type="number" placeholder="Type score" />
```

In javascript:
```js
let scoreInput = document.getElementById("scoreInput");
```

---

We can get the value of the input by accessing its `value` property. 

Its type will depend on what `type` value in HTML attribute.

```js
let scoreInput = document.getElementById("scoreInput");
let scoreValue = scoreInput.value;
```

---

### Task 1

In HTML, create a div, an input, and a button.

When the user puts their name into the input and clicks the button, set the div content to:

```"Hello Abdo!"```

Or whatever username the user inputs.

---

### Task 2

In HTML, create an input, and a button.

When the user types a color into the input and clicks the button, set the body background color to what the user input.

So if the user types "blue" into the input and clicks the button, the page background color should turn blue.

---

### Task 3

We're creating a web shop selling hummus (or chocolate, or eba and egusi soup)!

Create a number input field in HTML that lets the user choose the amount of hummus:

```html
Choose the amount of hummus servings:
<input type="number" id="amount" min="0" value="0" oninput="amountChanged()">
```

Use the `valueAsNumber` property of the number input to get the amount that the user selected in your `amountChanged` function. Output the total price the user has to pay to a `div` element.

---

### Task 4 (Bonus)

Extend your webshop to sell two products (e.g. hummus _and_ chocolate).

Every product has a different price. Update the total price in the `div` element every time the user changes the amount of hummus and chocolate.

---

### Task 5 (Bonus)

There's a special sale - if the user buys products for more than 20 EUR, they get 10% discount.

---

### Task - Extra

Let's create a webpage with three buttons, "red", "green", "blue".

When you press the button, set `document.body.style.backgroundColor` to that color.

BONUS:

* If you press the button again, change the color back to white.
* Solve the task with only one single `function` and one single `if/else` statement.

---

### Solution Task 1

HTML:

```html
<button onclick="changeColor()">Click me!</button>
<div id="myDiv">Hello</div>
<script>
    function changeColor() {
        let myDiv = document.getElementById("myDiv");
        myDiv.style.backgroundColor = "red";
    }
</script>
```

---

### Solution Task 2

```html
<button onclick="count()">Click me!</button>
<div id="myDiv">You clicked 0 times</div>
<script>
    let clickCount = 0;
    function count() {
        clickCount += 1;
        let myDiv = document.getElementById("myDiv");
        myDiv.textContent = "You clicked " + clickCount + " times";
    }
</script>
```

---

### Solution Task 3

```html
<input type="number" id="amount" min="0" value="0" oninput="amountChanged()">
<div id="priceDiv">0 EUR</div>
<script>
    let hummusPrice = 5;
    function amountChanged() {
        let amountElement = document.getElementById("amount");
        let priceDiv = document.getElementById("priceDiv");
        let amount = amountElement.valueAsNumber;
        let totalPrice = hummusPrice * amount;
        priceDiv.textContent = totalPrice + " EUR"
    }
</script>
```

---

### Solution Task Extra

HTML:
```html
<button onclick="changeColor('red')">red</button>
```

JS:
```js
function changeColor(color) {
    if (document.body.style.backgroundColor === color) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = color;
    }
}
```
