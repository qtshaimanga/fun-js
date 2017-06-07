## Functional JavaScript

and how to use it in React and Redux

---

### Wolfgang Goedel
Team Leader Front

<img src="src/img/sfeir.png" width="33%" style="border: 0; box-shadow: none">

@wgoedel

---

## what is this FP thing ?
## why should I care ?

---

- lamda calculus
- currying
- monoids
- higher order functions
- functors
- partial application
- monads
- pure functions
- applicatives
- ...

---

ceci n'est pas un cours de Math ;)

---

**functional programming in JavaScript**

- **higher order functions**
  - forEach, map, reduce, filter, chain
  - ex: working with lists

- **composition**
  - currying, partial application
  - point free
  - ex: transform data structures 



pause



**functional React**

- **UI = *f*(state)**
  - my app is a pure function

- **event handling**
  - implementing **Redux**

---

**Functional programming** is the process of building software by **composing pure functions**, avoiding shared state, mutable data, and side-effects.

---

## pure functions



### a function is pure when...

- The function always evaluates the same result value given the same argument value(s) <!-- .element: class="fragment" -->

- Evaluation of the result does not cause any semantically observable side effect <!-- .element: class="fragment" -->

Note:
comparision with mathematics vs physics
explain what a side effect is
- mutation of input values or global state
- meaningful output / is logging a side effect ?



### ...has some cool properties

- predictability<!-- .element: class="fragment" -->

- referential transparency<!-- .element: class="fragment" -->

- parallelization<!-- .element: class="fragment" -->

- memoization<!-- .element: class="fragment" -->

- laziness<!-- .element: class="fragment" -->

Note:
- predictability: easy to test
- ref integrity: invocation can be replaced by its result
- parallelization: could (and will) be implemented by JS engines
- memoization: 
- laziness:

---

## immutability



### ...data is mutable when

it is subject to change or alteration<!-- .element: class="fragment" -->

````js
let mutableVariable = 'some value';
mutableVariable = 'some other value';

const mutableObject = {
  value: true
};
mutableObject.value = false;
````
<!-- .element: class="fragment" -->



### ...data is immutable when

once created, it can never change<!-- .element: class="fragment" -->

````js
const oneString = 'I am immutable';
const newString = oneString.slice(5);
// strings are immutable is JS
````
<!-- .element: class="fragment" -->

````js
const aNumber = 42; // so are numbers
const nothing = undefined; // and undefined (sic!)
const notMore = null; // ...
const aSymbol = Symbol(); // hopefully ;)
````
<!-- .element: class="fragment" -->



### JavaScript arrays are mutable :(

````js
const words = ['best', 'of'];
const v2 = words.push('web');
// what is v2 ?

const fourPrimes = [2, 3, 5, 7];
const morePrimes = fourPrimes.concat(11).concat([13, 17]);
const es6goodies = [...fourPrimes, 11, ...[13, 17]];
````



### JavaScript objects are mutable :(

````js
const todo = {
  subject: 'learn fun-js',
  done: false
};

function complete(todo) {
  todo.done = true;
  return todo;
}
// impure => mutates its paramter

function pureComplete(todo) {
  return Object.assign({}, todo, { done: true });
}
const pureWithSpread = todo => ({...todo, done: true});
````

---

### why use immutable data

- mutation tracking is hard !<!-- .element: class="fragment" -->

- value comparision<!-- .element: class="fragment" -->

````js
const a = someObject;
const b = pureFunction(a);

if (a !== b) {
  // do what you need to do
} else {
  // nothing has changed
}
````
<!-- .element: class="fragment" -->

Note:
- mutation tracking: get a reference, keep it, use it later --> you connot assume it is still what you expect it to be
