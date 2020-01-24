'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const shiftItem = this[0];

    this.reverse();
    this.length -= 1;
    this.reverse();

    return shiftItem;
  };
}

module.exports = applyCustomShift;
