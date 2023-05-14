<!-- .slide: id="lesson15" -->

# Basic Frontend - Spring 2023

Lesson 15, Tuesday, 2023-05-16

---

### Lesson overview

- Recap
- Libraries
- Libraries + fetch examples and tasks

---

### Recap

- JSON is a string representation of a JavaScript object
- It stands for **J**ava**S**cript **O**bject **N**otation
- JSON can be easily transferred (and stored)

---

### Recap

**async** and **await** keywords in JavaScript provide a modern syntax to help us handle asynchronous operations.

```js
async function fetchDataFromApi() {
  let res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
  let json = await res.json();
  console.log(json.joke);
}
```

---

<!-- .slide: id="libraries" -->

# Libraries

---

What is a library?

- General definition: A collection of resources used for software development
- More specifically, libraries usually relate to one specific type of functionality that you require for your app to function that (usually) someone else has written.
- Examples: chart.js, d3.js, Plotly, Leaflet, ....

---

### Loading a library

Up until now, this was our standard pattern:

```html
<html>
  <body>
    Hello from HTML!
    <script>
      console.log('Hello from JavaScript!');
    </script>
  </body>
</html>
```

---

Javascript can also be loaded from a file inside the same directory as the HTML file:

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

You can now write all your JavaScript in `main.js`.

---

### Multiple scripts

We can add as many scripts as we want:

```html
<html>
  <body>
    <script src="utilities.js"></script>
    <script src="recipes.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

This allows us to split long scripts into pieces

---

### Multiple scripts

- If we have multiple script tags, we can use all global variables and global functions from all scripts that are added _before_ our script.
- Scripts are run in order!
- In the example on the last slide, `recipes.js` can use all globals from `utilities.js`, and `main.js` can use all globals from `recipes.js` and `utilities.js`

---

### Scripts in header vs. body

We put our _own_ scripts at the bottom of the `<body>` tag. This allows us to access all HTML elements via DOM API

We can put scripts also in the `<head>` tag. These are loaded _before_ the page is rendered:

```html
<html>
  <head>
    <script src="utilities.js"></script>
  </head>
  <body>
    <div id="myDiv">
      <!-- Elements go here -->
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

---

### Remote scripts

So far, we loaded scripts only from our local file system.
However, scripts can also be remote addresses. In the example below, we load the `plotly.js` library:

```html
<html>
  <head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
</html>
```

---

### Plotly

- Plotly is a graphing library
- It is Open Source (MIT license)
- When we load `plotly-latest-min.js`, we have access to a single global object called `Plotly`
- Documentation: https://plotly.com/javascript/getting-started/

---

### Plotly example

```html
<html>
  <head>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  </head>
  <body>
    <div id="myGraph"></div>
    <script>
      let dataSet1 = {
        x: [1, 2, 3, 4],
        y: [0, 12, 8, 17],
        type: 'scatter',
      };
      Plotly.newPlot('myGraph', [dataSet1]);
    </script>
  </body>
</html>
```

---

### Task 1

Here is an array of the temperature data for Berlin from 1st of May, 2023. Can you plot them using Plotly?

```js
let temperatures = [
  19.2, 16.4, 15.82, 19.12, 20.3, 14.8, 16.24, 18.52, 19.7, 21.27, 22.4, 22.62,
  21.88, 20.91, 17.73,
];
```

---

### Bonus

### Task 2

Create a new graph of the forcast of the new hourly temperature in Berlin for the next 3 days.

you can fetch the data by using the following URL

```
https://api.open-meteo.com/v1/forecast?latitude=52.50&longitude=13.48&hourly=temperature_2m&forecast_days=3
```

more information about the API: https://open-meteo.com/en/docs

---

### Bonus

Let the user choose a the number of days to be shown in the graph.
