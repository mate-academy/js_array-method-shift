'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const shiftedElement = this[0];
    this.splice(0, 1);

    return shiftedElement;
  };
}

module.exports = applyCustomShift;
