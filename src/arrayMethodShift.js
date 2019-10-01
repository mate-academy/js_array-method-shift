'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this === []) {
      return undefined;
    }

    const element = this[0];
    this.splice(0, 1);

    return element;
  };
}

module.exports = applyCustomShift;
