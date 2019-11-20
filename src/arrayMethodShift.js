'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }
    const deleteItem = this.splice(0, 1);
    return +deleteItem;
  };
}

module.exports = applyCustomShift;
