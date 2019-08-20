'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const returnItem = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    if (this.length) {
      this.length--;
    }
    return returnItem;
  };
}

module.exports = applyCustomShift;
