'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstItem = this[0];

    if (this.length > 1) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      this.length--;
    }

    return firstItem;
  };
}

module.exports = applyCustomShift;
