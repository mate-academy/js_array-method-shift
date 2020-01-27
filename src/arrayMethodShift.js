'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstItem = this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    if (!this.length) {
      return undefined;
    }

    this.length -= 1;

    return firstItem;
  };
}

module.exports = applyCustomShift;
