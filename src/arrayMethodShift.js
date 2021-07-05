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

    const result = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    this.length--;
    return result;
  };
}

module.exports = applyCustomShift;
