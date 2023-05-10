<!-- .slide: id="lesson14" -->

# Basic Frontend - Spring 2023

Lesson 14, Thursday, 2023-05-11

---

### Lesson overview

* Recap
* JavaScript Object Notation (JSON)
* `fetch` API

---

### Recap

What appears on the web page after this code runs?

```js
let el = document.createElement('button');
el.textContent = 'Click me!';
```

Answer: Nothing, because we never _append_ the element anywhere
<!-- .element: class="fragment" -->

---

### Recap

Corrected code:

```js
let el = document.createElement('button');
el.textContent = 'Click me!';
document.body.appendChild(el);
```

Now, the button is appended to the body. It'll appear _after_ all other elements.

---

<!-- .slide: id="JSON" -->
# JSON

---

In JavaScript, we can put all keys of objects in quotes. This is purely optional.
We can still access the keys without quotes:

```js
let me = {
    "name": "John",
    lastName: "Doe",
    "hobbies": [ "Eat", "Sleep" ]
};

console.log(me.name); // "John"
```

---

### Transferring data over the internet

Let's say we want to transfer the object `me` over the internet. We can't just send the object, because the internet only understands strings.

We could send a string like "Hi my name is John Doe and I like to eat and sleep". But then how would the receiver know what is the name, what is the last name, and what are the hobbies? (No, large language models are not the answer.)

---

### JSON

* JSON stands for **J**ava**S**cript **O**bject **N**otation
* It is a string representation of a JavaScript object
* All *keys* in our key value pairs must be in quotes
* Must contain only these types:
   * `string`, `number`, `boolean`, `array`
   * `null`
   * another JSON `object`
* These types are **forbidden**:
   * `function`, `undefined`

---

* When we exchange data between a browser and a server, we can only exchange string (not objects, arrays, numbers, booleans...)
* JSON is a string representation of JavaScript objects
* JSON can be easily transferred (and stored)
* The notation is very close to JavaScript objects, easy to handle from JavaScript. No complex transformation required.
* More info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

---

### JSON example

```json
{
    "name": "Bob",
    "instructor": true,
    "hobbies": [ "bike", "jog" ],
    "age": 42,
    "workAddress": {
        "street": "Invalidenstraße",
        "number": 116,
        "city": "Berlin"
    }
}
```

---

### Web APIs

There are a lot of services on the internet that transfer data via JSON.

Example: https://rickandmortyapi.com/api/character
Documentation: https://rickandmortyapi.com/documentation/#rest

Find more at https://apilist.fun, https://rapidapi.com/hub or https://apis.guru

---

OK great, but how can we access that from JavaScript?

---

### The dark past: XMLHttpRequest

```js
let url = 'https://something.com/';

function load(url, callback) {
 let xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function() {
   if (xhr.readyState === 4) {
     callback(xhr.response);
   }
 }

 xhr.open('GET', url, true);
 xhr.send(null);
}
```

---

<!-- .slide: id="fetch" -->
# fetch API

---

* Fetching data from the internet might take a lot of time
* We must not block our browser while waiting for the reply!
* One way around this is to use callbacks. The browser will call our callback function when the data is ready.
* `XMLHttpRequest` was working with callbacks. The API is ugly, error-prone and difficult to use

---

Can you think of something else that is not callbacks? Something that'll help us write code that is easier to read and understand? Something that'll help us avoid callback hell?

No? Neither could the JavaScript community. Until 2017.
<!-- .element: class="fragment" -->

---

### Promises

Let's say I want you to do something for me. I'll give you a promise that I'll give you one cookie when you're done. You can do whatever you want with the money, but you can't have it until you're done.

Now, I can watch you do the work, and when you're done, I'll give you the cookie. Or, I can go do something else, and when you're done, you call me and I'll give you the cookie.

We call the first method "synchronous", and the second method "asynchronous". "synchronous" means "at the same time", "asynchronous" means "not at the same time". "synchronous" code must wait for the result, "asynchronous" code can continue running other code.

<!-- .slide: style="font-size:80%" -->

---

### Synchronous function call

```js
function add(a, b) {
    return a + b;
}
let result = add(1, 2);
```

`add(1, 2)` is a synchronous function call. The function is called, and the result is returned immediately. No other code runs in between. While `add` runs, the entire web page is blocked.

---

### Asynchronous function call

```js
async function add(a, b) {
    return a + b;
}
let result = add(1, 2);
```

We declare `add` with the additional `async` keyword. This tells JavaScript that the function is asynchronous. The function is called, but the result is not returned immediately. The function returns a promise.

---

So great, we can call a function asynchronously.

But how do we get the result?
<!-- .element: class="fragment" -->

---

### await

```js
async function add(a, b) {
    return a + b;
}
async function main() {
    let result = await add(1, 2);
}
main();
```

We can use the `await` keyword to wait for the result of an asynchronous function. The `await` keyword can only be used inside an `async` function.

---

### fetch

`fetch` is a function that we can use to download content from the internet asynchronously.

```js
async function main() {
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    console.log(data);
}
```

---

### Tasks

1. Download the data from https://rickandmortyapi.com/api/character in JavaScript and display the name of the first character in the console.
1. Display the name of **all** characters in the console.
1. Create a web page that displays the name of all characters.
1. Also display other properties of the character, e.g. the species, gender...
1. Also display the image of the character. (Hint: use `createElement` to create an `img` element).

<!-- .slide: style="font-size:80%" -->

---

### Bonus tasks

1. Add pagination to your web page. Display the characters, and add a "next" button. When the user clicks on the button, display the next page of characters.
1. Add a "previous" button. When the user clicks on the button, display the previous page of characters. (Hint: make sure you check for `null` in case there's no previous or next page!)
1. Add a search box to your web page. When the user types something in the search box, display only the characters that match the search term. Hint: Use https://rickandmortyapi.com/documentation/#filter-characters

<!-- .slide: style="font-size:80%" -->
