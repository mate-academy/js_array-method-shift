'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const result = this[0];

    if (this.length !== 0) {
      this.splice(0, 1);
    }

    return result;
  };
}

module.exports = applyCustomShift;
