'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    };

    const item = this[0];
    const newArrayLength = this.length - 1;

    for (let i = 0; i < newArrayLength; i++) {
      this[i] = this[i + 1];
    };

    this.length = newArrayLength;

    return item;
  };
}

module.exports = applyCustomShift;
