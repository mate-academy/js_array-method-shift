'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const res = this[0];

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }

    if (this.length > 0) {
      this.length = this.length - 1;
    } else {
      this.length = this.length = 0;
    }

    return res;
  };
}

module.exports = applyCustomShift;
