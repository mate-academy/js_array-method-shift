'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const returnedElement = [...this];

    if (!this.length) {
      return;
    }

    for (let i = 0; i < returnedElement.length - 1; i++) {
      this[i] = returnedElement[i + 1];
    }

    this.length--;

    return returnedElement[0];
  };
}

module.exports = applyCustomShift;
