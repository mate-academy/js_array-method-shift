'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const shiftItem = this[0];

    if (this.length === 0) {
      return undefined;
    }

    for (let e = 0; e < this.length - 1; e++) {
      this[e] = this[e + 1];
    }

    this.length -= 1;

    return shiftItem;
  };
}

module.exports = applyCustomShift;
