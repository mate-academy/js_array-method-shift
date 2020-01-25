'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstValue = this[0];

    if (this.length < 1) {
      return undefined;
    }

    for (let i = 1; i < this.length; ++i) {
      this[i - 1] = this[i];
    }

    this.length--;

    return firstValue;
  };
}

module.exports = applyCustomShift;
