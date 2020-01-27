'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    if (this.length === 0) {
      return undefined;
    }

    const shiftValue = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length -= 1;

    return shiftValue;
  };
}

module.exports = applyCustomShift;
