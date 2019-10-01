'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const propShift = this[0];
    let placeNum = 1;

    for (const value in this) {
      this[value] = this[placeNum];
      placeNum++;
    }
    if (this.length > 0) {
      this.length--;
    }

    return propShift;
  };
}

module.exports = applyCustomShift;
