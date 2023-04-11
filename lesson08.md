<!-- .slide: id="lesson8" -->

# Basic Frontend - Spring 2023

Lesson 8, Tuesday, 2023-04-11

---

<!-- .slide: id="intro-objects" -->

# Objects

---

<!-- .slide: style="font-size:80%" -->

### Outline

- A Composite Data Type
- Property, Key-Value Pair
- Operations on Objects
- Nesting
- Rules
- Comparision of Basic Data Types and Composite Data Types
- Comparision of Arrays and Objects
- Exercises

---

### HTML Elements

A single HTML element can have multiple values associated with it:

```html
<img src="cat.jpg" alt="Cute cat" width="120" height="100"/>
<input type="text" placeholder="Enter name" disabled/>
```
---

### Basic data types

---

`34 * 10 + 170`

`"Hello, I am " + "Anne"`

---

Multiple variables

```js
let name = "Anne";
let age = 34;
let height = 170;
let origin = "Denmark";
let likesPizza = true;
```

---

It becomes problematic when we have a table of data

```js
person1Name, person1Age, person1Height, person1Origin
person2Name, person2Age, person2Height, person2Origin
person3Name, person3Age, person3Height, person3Origin
```

---

### A collection of values

---

In Abdullah’s game, an array can hold a person’s name, age and height as one single unit

`[name, age, height]`


---

### Composite Data Types

- Array

- Object
<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Objects

An Object represents data that belong to a single entity

```js
{
    name: "Anne", 
    age: 34, 
    height: 170, 
    origin: "Denmark"
}
```

---

### Property

Every element is called a **Property**

```js
{
    userID: 1234,
    memberSince: "01/01/2001"
}
```

How many properties do you see?
<!-- .element: class="fragment" data-fragment-index="1" -->

Answer: 2
<!-- .element: class="fragment" data-fragment-index="2" -->

---

A property has a **name** and a **value**

||Sample|
----------|----------
|Property: |`age: 34`|
|its name: |`age`|
|its value: |`34`|

---

```js
{name: "Anne", age: 34, height: 170, origin: "Denmark"}

{name: "Andy", age: 27, height: 185, origin: "England"}

{name: "Ahmed", age: 30, height: 177, origin: "Syria"}
```

---

### Key-Value Pair

A property is also called a **key-value pair**


![](images/dictionary.jpg) <!-- .element: style="width: 400px; height: 300px; display: block; margin: auto;" -->

Each word is a `key` 
// on the left-hand side 

Each definition is a `value` 
// on the right hand side

---

```js
{
    Monday: "Oh, it's Monday again",
    Tuesday: "Much better",
    Wednesday: "Already mid-week :)",
    Thursday: "Soon it is weekend",
    Friday: "Last day of the work-week",
    Saturday: "Do some shopping",
    Sunday: "Rest at last"
}
```

---

### Operations on Objects

---

```js
typeof {name: "Anne", age: 34, height: 170} // "object"
```

---

### How to create an Object

Anne is 34 years old:

```js
34
```

This is how we create an object for Anne:
<!-- .element: class="fragment" data-fragment-index="1" -->


```js
{
    name: "Anne",
    age: 34
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

---

### Assign to a variable

```js
let anne = {
    name: "Anne",
    age: 34
};
```

---

### Read the value of a property

```js
anne.age // 34
```

---

If a property does not exist in an object, what do we get then?


```js
anne.favoriteColor //undefined
```
<!-- .element: class="fragment" data-fragment-index="2" -->


---

### Change the value of a property

Anne's current age

```js
anne.age; // 34
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Change her age to 35
<!-- .element: class="fragment" data-fragment-index="2" -->
```js
anne.age = 35;
```
<!-- .element: class="fragment" data-fragment-index="3" -->

Increase her age by 1
<!-- .element: class="fragment" data-fragment-index="4" -->
```js
anne.age += 1; // 36
```
<!-- .element: class="fragment" data-fragment-index="5" -->

---

### Add a new property

Let's add a new property to this object

```js
let anne = {name: "Anne"};
```


```js
anne.address = "123 Street, Berlin";
```
<!-- .element: class="fragment" data-fragment-index="1" -->


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

## Rules

---

### Order of properties does not matter

The following are all the same

```js
{name: "Anne", age: 34, height: 170}
{age: 34, height: 170, name: "Anne"}
{name: "Anne", height: 170, age: 34}
```



---

### Property names must be unique

When working with the Object data type, property names must be unique

```js
{name: "Anne", height: 170} // correct
{name: "Anne", name: "Annie", height: 170} // pointless

```

---

### Every object is unique

Every object we create is only identical to itself but not to a different copy, even though they might contain the same data

```js
let anne      = {name: "Anne", age: 34};
let anneAgain = {name: "Anne", age: 34};

anne === anne; // true
anne === anneAgain; // false
```

---

It is different with basic data types, `number, boolean, string, undefined, null`

```js
35 === 35 //true
true === true // true
"Anne" === "Anne" //true
undefined === undefined //true
null === null //true
```

---

### Comparision of Basic Data Types and Composite Data Types

|Criteria|Basic value|A collection|
|--------|-----------|------------|
|Sample|34| ["Anne", 34, 170]|
|Number of values inside|1|3|
|Type of values inside|`number`|`string`, `number`, `number`|
|Operations|defined by data type|defined by data type + defined by us|
|Equality of values| `34 === 34 //true`|`[34] === [34] //false`|

---
<!-- .slide: style="width:"80%""" -->

#### Comparision of Arrays and Objects

|Criteria|Array|Object|
|--------|-----------|------------|
|Sample | [34, 50] | {age: 34, weight: 50} |
|Access an element | `salaries[0]`  <pre>index-based</pre> | `person.age` <pre>key-based</pre> |
|Type of accessor | index is a number <pre>0,1,2,3...</pre> | key is a string <pre>"age", "weight"...</pre> |
|Equality of values|`[34] === [34]` <pre>false</pre>|`{age: 34} === {age: 34}`<pre>false</pre>|
|Use when you want to store multiple values | of the same type. e.g. all numbers | of different types e.g. number, string |

---

### Exercise 1

Now it is your turn to create an object to represent you

It could contain:

```js
name, age, favouriteFood, favouriteMusic, isMarried
```

Assign your object to a variable called `me`

---

### Exercise 2

Now interview your teacher to collect their data

```js
name, age, favouriteFood, favouriteMusic, isMarried
```

Assign this object to a variable called `teacher`

---

### Exercise 3

Now introduce yourself

```js
Hi, my name is Anne. 
I am 34 years-old. 
My favourite food is Pizza. 
I enjoy listening to Jazz. 
I am not married.
```

---

### Exercise 4

Can you add your `hobbies` to your object?

For example: hiking, biking, swimming

<pre>Hint: they represent multiple values, think of a data type we already learned</pre>

---

You can find the exercise solutions here

- [Exercise 1](2023-04-11-intro-objects/exercise1.js)
- [Exercise 2](2023-04-11-intro-objects/exercise2.js)
- [Exercise 3](2023-04-11-intro-objects/exercise3.js)
- [Exercise 4](2023-04-11-intro-objects/exercise4.js)

---

You can practice loops with these exercises

- [Forbidden Word](2023-04-11-loop-exercises/exercise-task-1.js)
- [Forbidden Word Solution](2023-04-11-loop-exercises/exercise-solution-1.js)
- [Youtube Upload Count](2023-04-11-loop-exercises/exercise-task-2.js)
- [Youtube Upload Count Solution](2023-04-11-loop-exercises/exercise-solution-2.js)

<pre>These exercises are adapted from Edabit Exercises.</pre>
Original exercises:
- [Forbidden Letter](https://edabit.com/challenge/AhFCvDdQeA7TnKSqe)
- [Youtube Upload Count](https://edabit.com/challenge/GoXcArzHKTWaA8C2z)