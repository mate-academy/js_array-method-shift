'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let shiftItem;

    if (this[0] !== undefined) {
      shiftItem = this[0];
    } else {
      return;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length = this.length - 1;

    return shiftItem;
  };
}

module.exports = applyCustomShift;
