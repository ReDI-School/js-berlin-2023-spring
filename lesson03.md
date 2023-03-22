<!-- .slide: id="lesson3" -->

# Basic Frontend - Spring 2023

Lesson 3, Thursday, 2023-03-23

---

### Recap

What do you remember so far?

---

### Recap: data types

Number:
```js
42
-3.1415
```

String:
```js
"John"
'Berlin'
```

Boolean:
```js
true
false
```

---

### Recap operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+` `-` `*` `/` `**` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `===` `!==` `<` `>` `<=` `>=` | `30 !== 25`<br/>`20 >= 18` |

---

### Lesson Overview

* VSCode
* Logical Operators

---

# VSCode

So far, we've used the JavaScript console to enter JavaScript code. This is great for trying small snippets of code (REPL: Read-Eval-Print-Loop).

But what if we want to write something more complex, e.g. more than one line?

---

Create a new HTML page and open it in the browser, for example:

1. Open VSCode
1. Click on *File* -> *New File*
1. Click on *File* -> *Save File*, save it as e.g. `index.html`
1. Enter `!` and confirm with the *Enter* key to create a skeleton HTML file
1. Right click on the tab with the name `index.html`, choose *Copy Path*
1. Paste the path to the browser

---

Your HTML body now looks something like this:

```html
<body>
    Test Test Test
</body>
```

How do we get JavaScript into the page?

---

We can use the `<script>` tag to include JavaScript code:

```html
<body>
    Test Test Test
    <script>
        1 + 1
    </script>
</body>
```

---

### How to modify HTML from JavaScript?

The browser defines a global variable `document.body.textContent` for us. We can assign a string to this variable to change the text of the body:

```html
<body>
    Test Test Test
    <script>
        document.body.textContent = "Hello from JavaScript";
    </script>
</body>
```

What do you observe?

---

### Task

Create a website that uses JavaScript to compute how much you need to pay to go to the cinema with your friends.

Create variables for the number of friends, the price of a ticket and the total sum you need to pay.

Show the total amount on your web page.

Change the amount of friends or the price for a ticket, then reload your page. Does it work?

---

# Logical Operators

---

### Logical Operators

These operators work on `boolean` values:

* `&&` AND
* `||` OR
* `! ` NOT

---

### Logical NOT !

Logical NOT negates a boolean:

```javascript
!true  // false
!false // true
```

---

Example:

```js
let hatesPineapple = false;
let canEatPizzaHawaii = !hatesPineapple;
```

---

### Quiz - Do we go biking or swimming?

```js
let temperature = 28;
let isWarm = temperature > 25;
let goSwimming = isWarm;
let goBiking = !isWarm;
```

Answer: we go swimming <!-- .element: class="fragment" -->

---

### Try to prevent double negations

```js
let isNotWarm = temperature <= 25;
let goSwimming = !isNotWarm; // No. Just no. Please Don't.
```

Better:

```js
let isWarm = temperature > 25;
let goSwimming = isWarm;
```

---

### Logical AND

AND takes two booleans and returns `true` if **both** booleans are `true`

Example:

```js
let reviewedSlides = true;
let didHomework = true;
let canWatchMovie = reviewedSlides && didHomework;
// canWatchMovie is true
```

---

### Logical AND

```js
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
```

---

### Quiz - AND &&

I need bread **and** cheese to make a cheese toast

```js
let hasCheese = true;
let hasBread = true;

let canMakeCheeseToast = hasCheese && hasBread;
// what's the value of canMakeCheeseToast ?
```

`true` <!-- .element: class="fragment" -->

---

### Logical OR ||

OR takes two booleans and returns `true` if **at least one** is `true`

```js
let ateCookie = false;
let ateChocolate = true;
let shouldDoSports = ateCookie || ateChocolate;
// shouldDoSports is true
```

---

### Logical OR ||

```js
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
```

---

### Quiz - OR ||

To apply to a job, I need to know German **or** English

```js
let knowsGerman = false;
let knowsEnglish = false;

let canApply = knowsGerman || knowsEnglish;
// what's the value of canApply?
```

`false` <!-- .element: class="fragment" -->

---

### Task

A job add requires JavaScript or Python knowledge. Can you finish the code below?

```js
let canProgramJavaScript = true;
let canProgramPython = true;

let canApply = // ???
```

BONUS: The job also requires German language skills. Can you extend the code above?

---

### Task

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
```

* Copy/paste this code and look at the `totalPrice` variable in the console.
* Add a new variable that points to the price of popcorn (7 EUR).
* Can you add the price for one popcorn to the `totalPrice` variable?
* Create a new variable containing your total budget (30 EUR).
* Create a new variable that is `true` if the budget is high enough for cinema, `false` otherwise.
* BONUS: Create a new variable `isCheap` that is `true` if the price of popcorn is less than 5 EUR and the price for a ticket is less than 7 EUR.

<!-- .slide: style="font-size:80%" -->

---

### Solution

A job add requires JavaScript or Python knowledge. Can you finish the code below?

```js
let canProgramJavaScript = true;
let canProgramPython = true;

let canApply = canProgramJavaScript || canProgramPython;
```

---

### Bonus solution

```js
let canProgramJavaScript = true;
let canProgramPython = true;
let canSpeakGerman = false;

let canProgram = canProgramJavaScript || canProgramPython;
let canApply = canProgram && canSpeakGerman;
```

---

```js
let pricePerTicket = 8;
let friends = 3;
let totalPrice = friends * pricePerTicket;
let popcornPrice = 7;
totalPrice = totalPrice + popcornPrice;
let budget = 30;
let enoughMoney = budget >= totalPrice;
let isPopcornCheap = popcornPrice < 5;
let isTicketCheap = pricePerTicket < 7;
let isCheap = isPopcornCheap && isTicketCheap;
```
