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

### Recap

What are the components of a `while` loop?


```js
while (condition){
  // do something
  // update condition, otherwise we have an endless loop
}

```
<!-- .element: class="fragment" -->

---

There is a more compact way of expressing what we want to do with while loops, that is also less error prone, and that is called a `for` loop!

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

### Anatomy of a for loop

- `for`
- `(`
- `let variableName = some value`
- `;`
- condition
- `;`
- update

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

Now, go back to the exercise we did before the break in the group, and replace `while` with `for`.
