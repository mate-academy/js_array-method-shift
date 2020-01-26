'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    return (this.length !== 0)
      ? +this.splice(this[0], 1)
      : undefined;
  };
}

module.exports = applyCustomShift;
