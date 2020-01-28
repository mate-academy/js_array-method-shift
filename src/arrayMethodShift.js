'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const removedElement = this[0];

    if (this.length < 1) {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length--;

    return removedElement;
  };
}

module.exports = applyCustomShift;
