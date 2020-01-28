'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const fistElement = this[0];

    if (fistElement !== undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
      }

      this.length -= 1;
    }

    return fistElement;
  };
}

module.exports = applyCustomShift;
