'use strict';

/**
 * Implement method shift
 *
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let firstItem = this[0];
    this.splice(0, 1);

    return firstItem;
  };
}
module.exports = applyCustomShift;
