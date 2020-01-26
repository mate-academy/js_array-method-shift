'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const mainArr = Array.from(this);
    const result = mainArr[0];

    for (let i = 0; i < mainArr.length; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;

    return result;
  };
}
module.exports = applyCustomShift;
