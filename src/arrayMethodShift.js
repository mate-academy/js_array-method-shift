'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const shiftedList = [...this];
    const shiftedElement = this[0];

    this.length = 0;

    for (let i = 0; i < shiftedList.length - 1; i++) {
      this[i] = shiftedList[i + 1];
    }

    return shiftedElement;
  };
}

module.exports = applyCustomShift;
