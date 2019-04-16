'use strict';

/**
 * Implement method shift
 *
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let firstItem = this[0];
    this.reverse();
    this.pop();
    this.reverse();

    return firstItem;
  };
}
module.exports = applyCustomShift;
