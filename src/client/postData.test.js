import "babel-polyfill";
import { sum } from './js/functions'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
