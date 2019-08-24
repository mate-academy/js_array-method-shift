'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const sourceArr = [...this];
    if (this.length) {
      this.length -= 1;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = sourceArr[i + 1];
    }

    return sourceArr[0];
  };
}

module.exports = applyCustomShift;
