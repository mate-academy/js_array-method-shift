'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return;
    }

    const original = [...this];

    for (let i = 0; i < original.length - 1; i++) {
      this[i] = original[i + 1];
    }

    this.length = this.length - 1;

    return original[0];
  };
}

module.exports = applyCustomShift;
