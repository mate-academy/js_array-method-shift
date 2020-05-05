'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    if (this.length > 0) {
      const element = this[0];
      const arr = this;

      for (let i = 0; i < arr.length - 1; i++) {
        this[i] = arr[i + 1];
      }
      this.length -= 1;

      return element;
    }
  };
}

module.exports = applyCustomShift;
