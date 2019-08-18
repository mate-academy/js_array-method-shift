'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];

    if (this.length === 0) {
      return;
    }

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;

    return firstElement;
  };
}

module.exports = applyCustomShift;
