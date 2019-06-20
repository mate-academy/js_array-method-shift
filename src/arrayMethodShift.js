'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let result = this[0];
    if (this.length < 1) {
      result = undefined;
      return result;
    }
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length = this[this.length - 1];
    return result;
    // write code here
  };
}

module.exports = applyCustomShift;
