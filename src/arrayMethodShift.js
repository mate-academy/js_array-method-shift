'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const returnItem = this[0];

    if (this.length) {
      this.reverse();
      this.length = this.length - 1;
      this.reverse();
    }

    return returnItem;
  };
}

module.exports = applyCustomShift;
