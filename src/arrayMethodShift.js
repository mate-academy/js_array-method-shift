'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return undefined;
    } else {
      const propShift = this[0];
      let placeNum = 1;

      for (const value in this) {
        this[value] = this[placeNum];
        placeNum++;
      }
      this.length--;

      return propShift;
    }
  };
}

module.exports = applyCustomShift;
