'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];

    if (this.length !== 0) {
      delete this[0];

      for (let i = 0; i < this.length; i++) {
        this[i - 1] = this[i];
      }
      this.length--;
    }

    return firstElement;
  };
}

module.exports = applyCustomShift;
