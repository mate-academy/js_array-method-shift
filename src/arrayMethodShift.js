'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstElem = this[0];
    const newArr = [...this];
    this.length = 0;

    for (let i = 1; i < newArr.length; i++) {
      this[i - 1] = newArr[i];
    }

    return firstElem;
  };
}

module.exports = applyCustomShift;
