'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const res = this.reverse().pop();

    this.reverse();

    return res;
  };
}

module.exports = applyCustomShift;
