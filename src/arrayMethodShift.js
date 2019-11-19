'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const temp = this.slice(0, 1);
    this.splice(0, 1);
    return temp[0];
  };
}

module.exports = applyCustomShift;
