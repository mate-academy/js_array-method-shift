'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstSymbol = this[0];
    if (this.length < 1) {
      return;
    }

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    this.length -= 1;
    return firstSymbol;
  };
}

module.exports = applyCustomShift;
