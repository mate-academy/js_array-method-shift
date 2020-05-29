'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const cache = [];
    const shiftedElement = this[0];

    if (this.length <= 1) {
      return undefined;
    }

    for (let i = 1; i < this.length; i++) {
      cache[i - 1] = this[i];
      this[i - 1] = cache[i - 1];
    }
    this.length = this.length - 1;

    return shiftedElement;
  };
}

module.exports = applyCustomShift;
