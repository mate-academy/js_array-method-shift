'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const arr = this;
    const res = arr[0];

    if (arr.length === 0) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;

    return res;
  };
}

module.exports = applyCustomShift;
