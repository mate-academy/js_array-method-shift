'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arrayLength = this.length;
    if (arrayLength === 0) {
      return undefined;
    }

    const item = this[0];
    this.reverse();
    this.length = arrayLength - 1;
    this.reverse();
    return item;
  };
}

module.exports = applyCustomShift;
