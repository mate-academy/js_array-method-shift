'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) return undefined;
    const removedItem = this[0];

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        this.length--;
        return removedItem;
      } else {
        this[i] = this[i + 1];
      }
    }
  };
}

module.exports = applyCustomShift;
