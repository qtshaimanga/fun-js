export const forEach = (xs, fn) => {
  for (let i = 0; i < xs.length; i++) {
    fn(xs[i]);
  }
};

export const fold = (xs, base, combine) => {
  let acc = base;
  forEach(xs, (x) => {
    acc = combine(acc, x);
  });
  return acc;
};

export const map = (xs, projection) => {
  // map should return a new array with
  // the projection function applied to each element.
  // use forEach !
  const res = [];
  forEach(xs, (x) => res.push(projection(x)));
  return res;
};

export const filter = (xs, predicate) => {
  // filter should return an array with
  // every element from xs for which the
  // predicate function returns true.
  // use fold with a corresponding combine function
  const combine = (acc, x) => predicate(x) ? [...acc, x] : acc;
  return fold(xs, [], combine);
};

// some utility functions

export const identity = (x) => x;
export const mod2 = (x) => x % 2;
export const isEven = (x) => mod2(x) === 0;
export const firstLetter = (w) => w.charAt(0);
export const uppercase = (w) => w.toUpperCase();
export const add = (a, b) => a + b;

// implement these combined functions
// be creative, declare helper functions, try to be as declarative as possible

export const initials = (ws) => {
  // return a string from the first letter of every word in uppercase.
  // use the utility functions.
  // use can use map twice or once with a combined function.
  // use fold with add to concat
  const firstLetters = map(ws, firstLetter);
  const uppercaseLetters = map(firstLetters, uppercase);
  return fold(uppercaseLetters, '', add);
};

export const sumOfEven = (xs) => {
  // return the sum of even numbers
  // use filter and fold
  const even = filter(xs, isEven);
  return fold(even, 0, add);
};

export const minLength = (min) => {
  // return a predicate (yes! as function)
  // you can use in filter
  return (w) => w.length >= min;
};