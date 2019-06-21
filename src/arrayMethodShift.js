'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    if (this.length === 1) {
      this.length = 0;
    }

    const first = this[0];

    if (this.length > 1) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }

      this.length--;
    }

    return first;
  };
}

module.exports = applyCustomShift;
