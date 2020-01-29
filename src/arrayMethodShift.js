'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];

    if (this.length) {
      for (const element of this) {
        this[element] = this[element + 1];
      }

      this.length -= 1;
    }

    return firstElement;
  };
}

module.exports = applyCustomShift;
