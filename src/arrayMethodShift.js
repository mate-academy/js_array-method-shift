'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return;
    }

    let result = 0;

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        result = this[i];
        this[i] = this[i + 1];
      } else {
        this[i] = this[i + 1];
      }
    }
    this.length = this.length - 1;

    return result;
  };
}

module.exports = applyCustomShift;
