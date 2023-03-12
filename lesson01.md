<!-- .slide: id="lesson1" -->

# Basic Frontend - Spring 2023

Lesson 1, Tuesday, 2023-03-16

---

### Lesson overview

- Introduction to JavaScript
- Basic JavaScript data types
- Basic JavaScript operators

---

<!-- .slide: id="intro" -->

# Welcome to JavaScript!

---

> It does not matter what we cover, but what you discover
>
> \- ~Noam Chomsky~ Victor Weisskopf

(recently learned that the quote is by Victor Weisskopf, a famous physicist, but it's often attributed to Chomsky because he mentioned in some interviews. Still a good quote.)
<!-- .element: class="fragment" data-fragment-index="2" -->

---

### Questions

- don't be shy (or scared), ask questions!
  - as many as possible
- interrupt us
- there are no bad questions
- ask us to repeat
- if something is not clear to you, it's likely that it's not clear for others

---

### Pillars of Web Development

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| *Content* |  *Presentation* | *Dynamic Effects* |
| Nouns | Adjectives | Verbs |

```html
<p>Hey</p>  <!-- HTML: Adds a paragraph -->
```

```css
p { color: red; }  /* CSS: Makes the paragraph red */
```

```js
p.remove(); // JavaScript: removes the paragraph
```

---

### JavaScript (JS) - What is it?

* JS is a *programming language* (*scripting language*)
* JS allows you to implement dynamic content and effects

---

### JavaScript - History

* Invented by Brendan Eich in 1995 for the Netscape browser
<!-- .element: class="fragment" data-fragment-index="1" -->
* 1997: Standardized by ECMA as <!-- .element: class="fragment" data-fragment-index="2" --> [ECMA-262](https://262.ecma-international.org/13.0/) <!-- .element: class="fragment" data-fragment-index="2" -->
* 1998: ES2 released
<!-- .element: class="fragment" data-fragment-index="3" -->
* 1999: ES3 released
<!-- .element: class="fragment" data-fragment-index="4" -->
* umm...
<!-- .element: class="fragment fade-in-then-out" data-fragment-index="5" -->
* ZZzzzzz...
<!-- .element: class="fragment fade-in-then-out" data-fragment-index="6" -->
* 2009: ES5 released
<!-- .element: class="fragment" data-fragment-index="7" -->
* 2015: ES6 released
<!-- .element: class="fragment" data-fragment-index="8" -->
* Since 2016: <!-- .element: class="fragment" data-fragment-index="9" --> [Yearly releases](https://en.wikipedia.org/wiki/ECMAScript_version_history) <!-- .element: class="fragment" data-fragment-index="9" -->

---

### JavaScript is Everywhere

* For servers, back-end: [Node.js](https://nodejs.org/en/), [Deno](https://deno.land/), ...
* For mobile apps: [React Native](https://facebook.github.io/react-native/), [Cordova](https://cordova.apache.org/), ...
* For desktop apps: [PWAs](https://developers.google.com/web/progressive-web-apps), [Electron](https://www.electronjs.org/)
* [Most used programming language](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) among developers worldwide as of 2022
* [#1 most used language on GitHub](https://octoverse.github.com/2022/top-programming-languages) as of 2022

---

### Tools

We'll be using these tools during our course:

* [Chrome Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MDN Web Documentation](https://developer.mozilla.org/en-US/)

Please install [Visual Studio Code](https://code.visualstudio.com/) for the next lesson

---

### Additional Material

* [javascript.info](https://javascript.info/) - tutorials with nice (often visual) explanations
* [freecodecamp.org](https://www.freecodecamp.org/) - full free courses on many topics
* [udemy.com](https://www.udemy.com): Introduction to JS (course)
* [codeacademy.com](https://www.codecademy.com): Introduction to JS (another course)
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources
* [learnjavascript.online](https://learnjavascript.online): very good online course, but costs 40€

---

### Names of Special Characters

|||
| --- | --- |
| `(` Parentheses `)` | `<` Angle brackets `>` |
| `{` Braces, or curly braces `}` | `&` Ampersand `&` |
| `[` Brackets, or square brackets `]` | <code>&#124;</code> Vertical bar, or pipe <code>&#124;</code> |
| `;` Semicolon `;` | `:` Colon `:`  |
| `'` Single quote `'`| `#` Hash or number sign `#` |
| `"` Double quote `"` | `` ` `` Back tick `` ` `` |
| `_` Underscore `_` | `*` Asterisk `*` |
| `/` Slash, or Forward slash `/` | `~` Tilde `~` |
| `\` Backslash `\` | `^` Caret or circumflex `^` |

---

### Let's start with JavaScript!

* Open Google Chrome
* Hit `F12` key
* Click on **Console**
* Try entering something

What did you try? What did you see?
<!-- .element: class="fragment" -->
