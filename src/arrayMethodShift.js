'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      const arr = this;
      const result = this[0];
      for (let i = 0; i < this.length - 1; i++) {
        this[i] = arr[i + 1];
      };
      this.length--;
      return result;
    };
  };
}

module.exports = applyCustomShift;
