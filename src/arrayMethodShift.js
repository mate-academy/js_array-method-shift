'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length < 1) {
      return undefined;
    }

    const firstElement = this[0];
    const afterShift = [];

    for (let i = 1; i < this.length; i++) {
      afterShift[i - 1] = this[i];
      this[i - 1] = afterShift[i - 1];
    }
    this.length = this.length - 1;
    return firstElement;
  };
}

module.exports = applyCustomShift;
