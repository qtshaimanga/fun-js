import { map, filter, identity, mod2, firstLetter, initials, sumOfEven, minLength } from './combine';


const numbers = Object.freeze(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);

const words = Object.freeze(
  'Best of Web is extraordinary'.split(' ')
);


describe('map', () => {
  it('should return the same array when identity is applied', () => {
    const actual = map(numbers, identity);
    expect(actual).toEqual(numbers);
  });

  it('should return an empty array when called with an empty array', () => {
    const actual = map([], mod2);
    expect(actual).toEqual([]);
  });

  it('should apply mod2 to every element in numbers', () => {
    const actual = map(numbers, mod2);
    expect(actual).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]);
  });

  it('should return the first letters', () => {
    const actual = map(words, firstLetter);
    expect(actual).toEqual(['B', 'o', 'W', 'i', 'e']);
  });
});


describe('filter', () => {
  it('should return an empty array if predicate returns false for every element', () => {
    const actual = filter(words, () => false);
    expect(actual).toEqual([]);
  });

  it('should return the same array if predicate returns true for every element', () => {
    const actual = filter(words, () => true);
    expect(actual).toEqual(words);
  });

  it('should return words with at least 3 letters', () => {
    const actual = filter(words, (w) => w.length >= 3);
    expect(actual).toEqual(['Best', 'Web', 'extraordinary']);
  });
});


describe('combinations', () => {
  test('initials should return BOWIE', () => {
    const actual = initials(words);
    expect(actual).toEqual('BOWIE');
  });

  test('sumOfEven should return the answer to life, the universe and everything', () => {
    const actual = sumOfEven(numbers);
    expect(actual).toEqual(42);
  });

  test('minLenght should return a function we can apply to filter', () => {
    const actual = filter(words, minLength(3));
    expect(actual).toEqual(['Best', 'Web', 'extraordinary']);
  });
});