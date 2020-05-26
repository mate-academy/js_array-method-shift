'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return;
    }

    const original = [...this];

    for (let i = 0; i < original.length - 1; i++) {
      this[i] = original[i + 1];
    }

    this.length--;

    return original[0];
  };
}

module.exports = applyCustomShift;
