'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arr = [...this];
    this.length = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      this[i] = arr[i + 1];
    }

    return arr[0];
  };
}

module.exports = applyCustomShift;
