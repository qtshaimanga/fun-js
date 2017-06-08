// hint: I'm using all of those functions from ramda
import { map, reduce, filter, compose, curry, flip } from 'ramda';

const firstLetter = (w) => w.charAt(0);
const uppercase = (w) => w.toUpperCase();
const add = (a, b) => a + b;
const mod = (a, b) => a % b;
const eql = (a, b) => a === b;

// recode initial using composition
// use map twice to get the uppercase first letters
// or once with a composition of firstletter and uppercase ;)
// use reduce with add to concat
export const initials = compose(
  reduce(add, ''),
  map(uppercase),
  map(firstLetter)
);


// recode sumOfEven using composition
// use filter and reduce with add
// be creative !
// don't hesitate to define helper functions
// hint: flip changes the order of parameters,
// you may need it for mod which is not commutative
const eqlc = curry(eql);
const modc = curry(flip(mod));
const isEven = compose(eqlc(0), modc(2));

export const sumOfEven = compose(
  reduce(add, 0),
  filter(isEven)
);


// implement min3letters using filter
// you may define a helper function
// which returns a filter function
const minLength = curry((min, w) => w.length >= min);

export const min3letters = filter(minLength(3));