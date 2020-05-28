'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const array = this;
    const element = array[0];

    if (array.length < 1) {
      return undefined;
    }

    for (let i = 0; i < array.length; i++) {
      array[i] = array[i + 1];
    }

    array.length -= 1;

    return element;
  };
}

module.exports = applyCustomShift;
