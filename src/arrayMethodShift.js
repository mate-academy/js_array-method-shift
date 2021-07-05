'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const item2BLost = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    this.length > 0
      ? this.length = this.length - 1
      : null;

    return this.length > 0
      ? item2BLost
      : undefined;
  };
}

module.exports = applyCustomShift;
