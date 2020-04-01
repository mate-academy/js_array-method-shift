'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.lenth === 0) {
      return undefined;
    }

    const a = this.splice(0, 1)[0];

    return a;
  };
}

module.exports = applyCustomShift;
