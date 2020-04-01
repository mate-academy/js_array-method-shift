'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arr = this;
    const item = arr[0];

    if (arr.length < 1) {
      return undefined;
    };

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    };

    arr.length -= 1;

    return item;
  };
}

module.exports = applyCustomShift;
