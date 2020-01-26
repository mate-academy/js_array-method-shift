'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const removedItem = this[0];

    this.splice(0, 1);

    return removedItem;
  };
}

module.exports = applyCustomShift;
