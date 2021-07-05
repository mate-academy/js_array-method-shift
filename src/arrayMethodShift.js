'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return;
    }
    const deletedElement = this[0];
    this.forEach((currentValue, index, array) => {
      array[index] = array[index + 1];
    });
    this.length--;
    return deletedElement;
  };
}
module.exports = applyCustomShift;
