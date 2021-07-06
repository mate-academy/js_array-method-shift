'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === []) {
        return undefined;
      } else {
        return +this.splice(0, 1);
      }
    }
  };
}

module.exports = applyCustomShift;
