## combining functions

---

````js
function logArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function buildList(array) {
  for (let i = 0; i < array.length; i++) {
    $ul.append(`<li>${array[i]}</li>`);
  }
}
````

it's not fun to repeat ourselves<!-- .element: class="fragment" -->

---

in JavaScript **functions are values**

so we can accept them as **parameters**

---

````js
function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

forEach('Best Of Web'.split(' '), console.log);


const appendToUl = item => $ul.append(`<li>${array[i]}</li>`);

forEach('Best Of Web'.split(' '), appendToUl);
````

---

in JavaScript **functions are values**

so we can **return** them too

---

````js
function negate(fn) {
  return function(...args) {
    return !fn(...args);
  };
}

const isNotArray = negate(Array.isArray);
isNotArray('toto'); // true
````

---

## higher order functions

a higher order function is a function that
- accepts one or more functions as arguments<!-- .element: class="fragment" -->
- returns a function<!-- .element: class="fragment" -->
- or both<!-- .element: class="fragment" -->

---

**how to** log the elements of an array
````js
function logArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
````

**what**: log every element of the array
````js
function logArray(array) {
  forEach(array, console.log);
}
````

---

**Functional programming** is **declarative** rather than **imperative**, which means programming is done with **expressions** or **declarations** instead of **statements**.

### **what** instead of **how**

Note: abstract the algorithm

---

````js
function sum(numbers) {
  let result = 0;
  forEach(numbers, (n) => result += n);
  return result;
}

function prod(numbers) {
  let result = 1;
  forEach(numbers, (n) => result *= n);
  return result;
}
````
can you see a pattern here ?<!-- .element: class="fragment" -->

---

````js
function fold(array, base, combine) {
  let acc = base;
  forEach(array, (item) => { acc = combine(acc, item); });
  return acc;
}

const add  = (a, b) => a + b;
const mult = (a, b) => a * b;

const sum  = (array) => fold(array, 0, add);
const prod = (array) => fold(array, 1, mult);
````
you may have recognized "reduce" here<!-- .element: class="fragment" -->

---

you may expect **map** and **filter** now...

...you will have to implement them on your own<!-- .element: class="fragment" -->

````bash
git clone https://github.com/wolfgangGoedel/fun-js.git
git checkout ex/combine

cd app
npm install
npm test
````
<!-- .element: class="fragment" -->

edit<br>
src/justjs/combine.js<br>
make all tests pass
<!-- .element: class="fragment" -->

don't use Array.prototype functions,<br>
that would be too easy
<!-- .element: class="fragment" -->

---

````bash
# if you want to keep your work
git add .
git commit -m "whatever you want"
git checkout ex/combine-solution

# if you are not so proud of what you've done
git checkout -f ex/combine-solution
````