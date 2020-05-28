'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const length = this.length;

    if (length === 0) {
      return undefined;
    }

    const shifted = this[0];

    for (let i = 0; i < length; i++) {
      this[i] = this[i + 1];
    }

    this.length = length - 1;

    return shifted;
  };
}

module.exports = applyCustomShift;
