'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here

    if (!this.length) {
      return undefined;
    }

    const firstElement = this[0];
    const lastElementIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (i === lastElementIndex) {
        this[i] = firstElement;
      } else {
        this[i] = this[ i + 1 ];
      }
    }
    this.length--;

    return firstElement;
  };
}

module.exports = applyCustomShift;
