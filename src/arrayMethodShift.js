'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    this.length = this.length !== 0 ? this.length - 1 : 0;

    return firstElement;
  };
}

module.exports = applyCustomShift;
