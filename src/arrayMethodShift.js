'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const removedElement = this[0];

    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }

    if (this.length > 0) {
      this.length--;
    }

    return removedElement;
  };
}

module.exports = applyCustomShift;
