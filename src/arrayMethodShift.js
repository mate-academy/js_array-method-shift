'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return;
    }
    const firstElem = this[0];
    for (const index of this) {
      this[index] = this[index + 1];
    }
    this.length -= 1;
    return firstElem;
  };
}

module.exports = applyCustomShift;
