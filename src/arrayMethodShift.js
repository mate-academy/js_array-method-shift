'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];

    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
    } else {
      return undefined;
    }

    this.length -= 1;

    return firstElement;
  };
}

module.exports = applyCustomShift;
