'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstItem = this[0];
    const selfCopy = [...this];
    this.length = 0;
    for (let i = 0; i < selfCopy.length - 1; i++) {
      this[i] = selfCopy[i + 1];
    }
    return firstItem;
  };
}

module.exports = applyCustomShift;
