'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const item = this[0];
    if (this.length) {
      const newArray = [...this];
      this.length = this.length - 1;
      for (let i = 0; i < newArray.length - 1; i++) {
        this[i] = newArray[i + 1];
      }
    }

    return item;
  };
}

module.exports = applyCustomShift;
