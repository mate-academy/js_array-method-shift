'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElem = this[0];

    if (this.length) {
      for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
      }
      this.length = this.length - 1;
      return firstElem;
    }

    return undefined;
  };
}

module.exports = applyCustomShift;
