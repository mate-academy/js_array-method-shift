'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElement = this[0];
    const lengthArr = this.length;
    if (lengthArr > 1) {
      for (let i = 0; i < lengthArr; i++) {
        this[i] = this[i + 1];
      }
      this.length--;
    }
    return firstElement;
  };
}

module.exports = applyCustomShift;
