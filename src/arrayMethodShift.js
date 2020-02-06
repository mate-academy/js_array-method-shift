'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const firstElement = this[0];
    const startLength = this.length;

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length = startLength - 1;

    return firstElement;
  };
}

module.exports = applyCustomShift;
