'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return;
    }

    this.reverse();

    const deletedElement = this[this.length - 1];

    this.length -= 1;
    this.reverse();

    return deletedElement;
  };
}

module.exports = applyCustomShift;
