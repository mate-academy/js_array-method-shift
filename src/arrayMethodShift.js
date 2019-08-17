'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const shiftedEl = this[0];
    const tempArr = [];

    for (let i = 1; i < this.length; i++) {
      tempArr[i - 1] = this[i];
      this[i - 1] = tempArr[i - 1];
      if (i === this.length - 1) {
        this.length = this.length - 1;
      }
    }

    return shiftedEl;
  };
}

module.exports = applyCustomShift;
