'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length < 1) {
      return undefined;
    }
    const remove = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    this.length -= 1;
    return remove;
  };
}

module.exports = applyCustomShift;
