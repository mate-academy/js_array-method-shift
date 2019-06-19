'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const reservArray = [];
    const item2BLost = this[0];

    for (let i = 0; i < this.length; i++) {
      reservArray[i] = this[i];
    }

    this.length > 0
      ? this.length = this.length - 1
      : null;

    for (let i = 1; i < reservArray.length; i++) {
      this[i - 1] = reservArray[i];
    }

    return this.length > 0
      ? item2BLost
      : undefined;
  };
}

module.exports = applyCustomShift;
