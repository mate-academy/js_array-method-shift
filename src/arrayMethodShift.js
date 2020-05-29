'use strict';

/**
 * Implement method shift
 */

function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    };

    const deletedElement = this[0];
    const endLine = this.length;

    for (let i = 0; i < endLine; i++) {
      this[i] = this[i + 1];
    };

    this.length = this.length - 1;

    return deletedElement;
  };
}

module.exports = applyCustomShift;
