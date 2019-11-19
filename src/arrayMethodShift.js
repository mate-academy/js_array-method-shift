'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arr = [];
    const firstElement = this[0];
    for (let i = 1; i < this.length; i++) {
      arr.push(this[i]);
    }
    this.length = [];

    for (let j = 0; j < arr.length; j++) {
      this.push(arr[j]);
    }
    return firstElement;
  };
}

module.exports = applyCustomShift;
