'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const result = this[0];

    if (this.length < 1) {
      return undefined;
    }

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;

    return result;
  };
}

module.exports = applyCustomShift;
