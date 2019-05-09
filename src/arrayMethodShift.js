'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const removedItem = this[0];
    if (this.length) {
      for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1];
      }
      this.length = this.length - 1;
    }
    return removedItem;
  };
}

module.exports = applyCustomShift;
