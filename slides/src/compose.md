## composition

---

````js
const initials = (ws) => {
  const firstLetters = map(ws, firstLetter);
  const uppercaseLetters = map(firstLetters, uppercase);
  return fold(uppercaseLetters, '', add);
};
````

there's still a lot of noise

---

`(f ∘ g)(x) = f(g(x))`

`h = f ∘ g`

`h(x) = f(g(x))`

---

this works great if every function has a **single argument**
and the **argument type** of the **(N)th function** corresponds
to the **return type** of the **(N-1)th** function

---

but what about **map**, **filter**, **reduce**
<br>
<br>
`map :: ([a], (a => b)) => [b]`

`filter :: ([a], (a => boolean)) => [a]`

`reduce :: ([a], b, (b, a) => b) => b`

---

### solution:

## partial application
<!-- .element: class="fragment" -->

---

````js
// classic
const add = (a, b) => a + b;

// "functional"
const add = (a) => (b) => a + b;
````

````js
const add10 = add(10);

add10(5); // -> 15
````
<!-- .element: class="fragment" -->

in FP languages, every function always takes one argument,
just as in Mathematics !
<!-- .element: class="fragment" -->

---

let's redefine **map** or **reduce**
<br>
<br>
`map :: (a => b) => [a] => [b]`

`filter :: (a => boolean) => [a] => [a]`

`reduce :: ((b, a) => b) => b => [a] => b`

the datatype we are operating on always comes last...

---

and now we can do this:

`countEven = (reduce add 0) ∘ (filter isEven)`

we define new functions by composing smaller functions.

**that's all FP is about !**
<!-- .element: class="fragment" -->

---

````js
// this looks a bit odd in JavaScript
const sum1 = add(1)(2);

// what if we could do both:
const add1 = add(1);
const sum2 = add1(2);

const sum3 = add(1, 2);
````

---

### solution:

## currying
<!-- .element: class="fragment" -->

---

````js
const add = (a, b) => a + b;
const addC = curry(add);

const sum1 = addC(1, 2);
const add1 = addC(1);
const sum2 = add1(2);
````

a **curried function** returns its **result** if called with **all arguments**,
or **another curried function** when called with **less arguments**.

---

### introducing

## ramdajs.com
<!-- .element: class="fragment" -->

---

let's try it out:

````bash
git checkout ex/compose
````

redefine the combined functions we have implemented earlier,
using compose.

ramdajs has all you need, already curried:<br>
**map**, **reduce**, **filter**, and a lot more ;)

---

````bash
# if you want to keep your work
git commit -m "whatever you want"
git checkout ex/compose-solution

# if you are not so proud of what you've done
git checkout -f ex/compose-solution
````

---

# break !