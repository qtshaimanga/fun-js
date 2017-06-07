import { map, reduce, filter, compose, curry, flip } from 'ramda';

const firstLetter = (w) => w.charAt(0);
const uppercase = (w) => w.toUpperCase();
const add = (a, b) => a + b;
const mod = (a, b) => a % b;
const eql = (a, b) => a === b;

export const initials = compose(
  reduce(add, ''),
  map(uppercase),
  map(firstLetter)
);

const eqlc = curry(eql);
const modc = curry(flip(mod));
const isEven = compose(eqlc(0), modc(2));

export const sumOfEven = compose(
  reduce(add, 0),
  filter(isEven)
);

const minLength = curry((min, w) => w.length >= min);

export const min3letters = filter(minLength(3));