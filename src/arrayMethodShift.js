'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const removedElement = this[0];
    const arr = [...this];

    this.length = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      this[i] = arr[i + 1];
    }

    return removedElement;
  };
}

module.exports = applyCustomShift;
