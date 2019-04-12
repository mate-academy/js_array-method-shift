'use strict';

const applyCustomShift = require('./arrayMethodShift');
applyCustomShift();

test('`shift2` is added to [].__proto__', () => {
  expect([].shift2)
    .toBeInstanceOf(Function);
});

test(`shift2 doesn't call default shift`, () => {
  expect([].shift2.toString().includes('.shift('))
    .toBe(false);
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
