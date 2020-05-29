'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return;
    }

    const shifted = this[0];

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;

    return shifted;
  };
}

module.exports = applyCustomShift;
