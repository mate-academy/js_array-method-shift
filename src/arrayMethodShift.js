'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const item = this[0];
    this.reverse();
    this.length = this.length - 1;
    this.reverse();
    return item;
  };
}

module.exports = applyCustomShift;
