'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const result = this[0];
    if (!this.length) {
      return;
    }
    for (let i = 0; i <= this.length - 2; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    return result;
  };
}

module.exports = applyCustomShift;
