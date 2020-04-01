'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    for (let i = 0; i < this.length - 1; i++) {
      [this[i]] = [this[i + 1]];
    }

    this.length = this.length - 1;

    return 0;
  };
}

module.exports = applyCustomShift;
