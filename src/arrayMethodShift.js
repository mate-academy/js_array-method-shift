'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const firstElem = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;

    return firstElem;
  };
}

module.exports = applyCustomShift;
