'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const res = this[0];

    this.splice(0, 1);
    return res;
  };
}

module.exports = applyCustomShift;
