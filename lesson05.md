<!-- .slide: id="lesson5" -->

# Basic Frontend - Spring 2023

Lesson 5, Tuesday, 2023-03-30

---

### Lesson Overview

* `undefined` and `null` data types
* Compound Assignment Operators
* `if`, `else if`, `else`
* Lots of practice

---

### Data Type: Undefined

* **Undefined** has only one value: `undefined`
* It indicates the unintentional absence of any value
* `undefined` is automatically assigned to uninitialized variables

---

### Undefined example

```js
let x;  // no value is assigned to x
console.log(x); // undefined
console.log(typeof x); // "undefined"
console.log(x === undefined); // true
```

---

### Data Type: Null

* **null** has only one value: `null`
* It indicates the **intentional** absence of any value

Example:

```js
let x = null;
console.log(typeof x); // outputs 'object' due to a bug
console.log(x === null); // true
```

---

### Compound assignment operators

| Compound operator | Same as |
| ----------------- | ------  |
| `x += 42` | `x = x + 42` |
| `x -= 42` | `x = x - 42` |
| `x /= 42` | `x = x / 42` |
| `x *= 42` | `x = x * 42` |
| `x **= 42` | `x = x ** 42` |

Compound assignment operators are shorter ways of applying an operator on the variable and assigning the result back to the variable.

---

### Compound assignment operators example

```js
// this creates a website showing "Hello World"
document.body.textContent = "Hello";
document.body.textContent = document.body.textContent + " World";
```

Better:

```js
document.body.textContent = "Hello";
document.body.textContent += " World";
```

---

### Recap: if statements

```js
if (temperature > 20) {
  // block of code that will run
  // ONLY if temperature > 20
  console.log('Go to the park!');
}
```

---

### Recap: if else

```js
if (temperature > 20) {
  console.log('Go to the park!');
} else {
  // when will this execute??
  console.log('Study javascript!');
}
```

If `temperature` is less than or equal to 20
<!-- .element: class="fragment" -->

---

### Recap: rules of if, else if, else

```js
if (condition1) {
  // only if condition 1 is true
} else if (condition2) {
  // only if condition 1 is false and condition 2 is true
} else if (condition3) {
  // only if condition 1 and 2 are false and 3 is true
} else {
  // only if every condition above was false
}
// JavaScript will continue from here.
```

---

### Recap: rules of if, else if, else

- JavaScript will go through the if/else-if/else statements from top to bottom.
- In our example, it will check condition1, then condition2, then condition3...
- If one of the conditions evaluates to true, JavaScript will execute it’s code block and skip every following `else if` and `else`!

---

## Recap: Series of separate if statements

If we put a series of `if` statements one after the other, they will be evaluated independently of one another.

```js
if (condition1) {
    // do this if condition 1 is true
}
if (condition2) {
    // do this if condition 2 is true
    // no matter what condition 1 was
}
if (condition3) {
    // do this if condition 3 is true
    // no matter what condition 1 or 2 was
}
```

---

### Task

* Describe the weather based on the temperature:
  * Above 30
  * Above 20
  * Above 5
  * Everything else

---

### Is this correct?

```js
let temperature = 7;

if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.");
}
```

Look at it in [code-to-graph](https://crubier.github.io/code-to-graph/?code=bGV0IHRlbXBlcmF0dXJlID0gNzsKCmlmICh0ZW1wZXJhdHVyZSA-IDIwKSB7CiAgY29uc29sZS5sb2coIml0J3Mgd2FybSIpOwp9IGVsc2UgaWYgKHRlbXBlcmF0dXJlID4gMzApIHsKICBjb25zb2xlLmxvZygidG9vIGhvdCEhISIpOwp9IGVsc2UgaWYgKHRlbXBlcmF0dXJlID4gNSkgewogIGNvbnNvbGUubG9nKCJwZXJmZWN0LiIpOwp9IGVsc2UgewogIGNvbnNvbGUubG9nKCJpdCdzIGEgYml0IGNoaWxseS4iKQp9Cg), can you find the bug?

Try with a temperature of 35, what does it print? <!-- .element: class="fragment" -->

---

### Correct solution

```js
let temperature = 35;

if (temperature > 30) {
  console.log("too hot!!!");
} else if (temperature > 20) {
  console.log("it's warm");
} else if (temperature > 5) {
  console.log("perfect.");
} else {
  console.log("it's a bit chilly.");
}
```

---

### Buying ice cream

You have to go to the supermarket and buy ice-cream for your the party of your best friend.

Her instructions are:

* Buy strawberry flavor.
* If that's not available, buy mango flavor.
* If that's not available, buy the hazelnut one.
* If none of those are available, buy chocolate flavor.

These are your variables, write code that works for any `true` or `false`:
```js
let isStrawberryAvailable = false;
let isMangoAvailable = false;
let isHazelnutAvailable = true;
```

<!-- .slide: style="font-size:80%" -->

---

### Task

Let's go shopping. Create a variable containing the budget (try with `5`, `7`, `8` and `10`).

* If we have enough money left, buy milk (2 EUR).
* If we have enough money left, buy cheese (4 EUR).
* If we have enough money left, buy bread (2 EUR).
* If we have enough money left and we bought bread, buy butter (1 EUR).

Output what we bought and how much money is left.

These are your variables:

```js
let budget = 10;
let milkPrice = 2;
let cheesePrice = 4;
let breadPrice = 2;
let butterPrice = 1;
```

<!-- .slide: style="font-size:80%" -->

---

### Even more tasks

You're a developer in a bookstore. Can you finish all the tasks in this JavaScript project?

* [main.js](bookstore/main.js)
* [index.html](bookstore/index.html)

---

### Ice cream exercise solution

```js
let isStrawberryAvailable = false;
let isMangoAvailable = false;
let isHazelnutAvailable = true;

if (isStrawberryAvailable) {
    console.log("buying strawberry ice cream");
} else if (isMangoAvailable) {
    console.log("buying mango ice cream");
} else if (isHazelnutAvailable) {
    console.log("buying hazelnut ice cream");
} else {
    console.log("buying chocolate ice cream");
}
```

---

### Shopping exercise solution

```js
let budget = 32;
let milkPrice = 2;
let cheesePrice = 4;
let breadPrice = 2;
let butterPrice = 1;

if (budget >= milkPrice) {
  budget -= milkPrice;
  console.log("bought milk");
}

if (budget >= cheesePrice) {
  budget -= cheesePrice;
  console.log("bought cheese");
}

if (budget >= breadPrice) {
  budget -= breadPrice;
  console.log("bought bread");
  if (budget >= butterPrice) {
    budget -= butterPrice;
    console.log("bought butter");
  }
}

console.log("budget left:", budget);
```

<!-- .slide: style="font-size:50%" -->
