'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const token = this[0];
    if (this.length === 0) return token;
    this.reverse();
    this.length -= 1;
    this.reverse();
    return token;
  };
}

module.exports = applyCustomShift;
