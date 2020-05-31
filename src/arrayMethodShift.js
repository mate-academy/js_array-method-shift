'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const shifted = this[0];

    if (!this.length) {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;

    return shifted;
  };
}

module.exports = applyCustomShift;
