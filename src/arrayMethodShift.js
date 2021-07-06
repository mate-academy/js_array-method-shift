'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let shift;

    if (this[0] !== undefined) {
      shift = this[0];
    } else {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length = this.length - 1;

    return shift;
  };
}

module.exports = applyCustomShift;
