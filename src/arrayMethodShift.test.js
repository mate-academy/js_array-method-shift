'use strict';

const applyCustomIncludes = require('./arrayMethodShift');
applyCustomIncludes();

test('`shift2` is added to [].__proto__', () => {
  expect([].shift2)
    .toBeInstanceOf(Function);
});

test('Shift single item', () => {
  const source = [0, 1, 2, 3];
  const result = source.shift2();
  expect(source)
    .toEqual([1, 2, 3]);
  expect(result)
    .toBe(0);
});

test('Shift from empty array', () => {
  const source = [];
  const result = source.shift2();
  expect(source)
    .toEqual([]);
  expect(result)
    .toBe(undefined);
});

test('Shift ignores arguments', () => {
  const source = [0, 1, 2, 3];
  const result = source.shift2(2);
  expect(source)
    .toEqual([1, 2, 3]);
  expect(result)
    .toBe(0);
});
