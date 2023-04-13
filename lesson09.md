<!-- .slide: id="lesson9" -->

# Basic Frontend - Spring 2023

Lesson 9, Thursday, 2023-04-13

---

### Recap

What did we talk about last time?

---

### Objects

An Object represents data that belong to a single entity


Every element in an object is called a **Property**


```js
{
    userID: 1234,
    memberSince: "01/01/2001"
}
```

---

A property has a **name** and a **value**

|            | Sample    |
| ---------- | --------- |
| Property:  | `age: 34` |
| its name:  | `age`     |
| its value: | `34`      |

---

### How to create an Object

Anne is 34 years old:

```js
34
```

How do we create an object for Anne?


```js
{
    name: "Anne",
    age: 34
}
```
<!-- .element: class="fragment" -->



---

Can you tell me all the properties of the following object?

```js
let me = {
    name: "Mariana",
    isTeacher: true,
    age: 21
};
```

How would you access Mariana's age?
<!-- .element: class="fragment" -->

```js
let marianaAge = me.age;
```
<!-- .element: class="fragment" -->

---

### Objects can be nested

```js
let person = {
    name: "Ahmed",
    address: {
        street: "Karl-Max Alle 35",
        city: "Berlin"
    }
};
```

---

Read a deeply-nested property

```js
person.address.city // "Berlin"
```

---

### Task

Can you give an example of a nested object that we have already used?

```
document.body.textContent
```
<!-- .element: class="fragment" -->

---

### Team task

Create an array of objects for the people sitting on the same table as you.

Each object should contain the name of the person, their age, and their favorite food.


---

### Part 2

Use a while loop to find the names of all people who like the same food as you. Put these names into an array, and output this array into the console.

---

### Part 3

Use a while loop to find the names of all people younger and older than you, put them in 2 different arrays, and output these array into the console.

---

### Review

So far, our `while` loops have followed the same basic structure:
```js
let i = 1; // initialization
while (i <= 10) {  // condition
    // do something

    i++; // update
}
```
We can see that we are often initializing some integer variable before the loop as a counter, and updating the variable at the end of the loop.

But we're programmers... we like to simplify things! Is there a more concise way?

---

<!-- .slide: id="forLoop" -->

# For loop

look at this example, can you explain how do we write a for loop?

```js
for (let counter = 0; counter < 10; counter++){
  console.log(counter);
}
```

---
### For loops

A `for` loop works like a `while` loop, but it's more concise.

```js
for (initialization; condition; update) {
  // loop body
}
```


---

### Anatomy of a for loop

- `for`
- `(`
-  initialization
- `;`
- condition
- `;`
- update

The 3 main parts of the loop are all in one line, separated by semicolons (`;`).

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;       // part 1 - *initialize* the counter
while (i < 6) {  // part 2 - *test* the exit *condition*
  console.log(i);// loop body
  i++;           // part 3 - *update* the counter
}

// same code with for loop:

for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **initialization** part, then tests the **condition** part
and, if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (passwordIsWrong) {
  askForPassword();
}
```


---


### Task

use a for loop and output the numbers between 0 and 10 to the console

---

### Task

use a for loop and output the numbers between 13 and 17 to the console

---

### Task

use a for loop and output the numbers between 5 and -3 to the console

---

### For loops & arrays

For loops and arrays work wonderfully together!

```js
let languages = ["english", "german", "arabic", "russian"]

for (let i = 0; i < languages.length; i++){
  console.log(languages[i]);
}
```


---

### Task

Now, go back to the exercises we did before the break in the group, and replace `while` with `for`.
