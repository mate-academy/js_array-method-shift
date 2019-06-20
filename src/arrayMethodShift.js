'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this[0];
    this.reverse();
    this.length = this.length - 1;
    this.reverse();
    return value;
  };
}

module.exports = applyCustomShift;
