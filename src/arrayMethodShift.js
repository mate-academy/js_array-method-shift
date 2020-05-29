'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arr = [...this];

    if (!this.length) {
      return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
      this[i] = arr[i + 1];
    }

    this.length--;

    return arr[0];
  };
}

module.exports = applyCustomShift;
