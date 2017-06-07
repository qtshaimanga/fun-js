import { initials, sumOfEven, min3letters } from './compose';


const numbers = Object.freeze(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);

const words = Object.freeze(
  'Best of Web is extraordinary'.split(' ')
);


describe('compositions', () => {
  test('initials should return BOWIE', () => {
    const actual = initials(words);
    expect(actual).toEqual('BOWIE');
  });

  test('sumOfEven should return the answer to life, the universe and everything', () => {
    const actual = sumOfEven(numbers);
    expect(actual).toEqual(42);
  });

  test('minLenght should return a function we can apply to filter', () => {
    const actual = min3letters(words);
    expect(actual).toEqual(['Best', 'Web', 'extraordinary']);
  });
});