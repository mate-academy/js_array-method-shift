'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    this.reverse();
    let a = this[this.length - 1];
    if (this.length === 0) {
      return undefined;
    } else {
      this.length--;
    }
    this.reverse();
    return a;
  };
}

module.exports = applyCustomShift;
