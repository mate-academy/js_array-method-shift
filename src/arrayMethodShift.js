'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const answer = this[0];

    if (this.length === 0) {
      return undefined;
    }

    for (let i = 1; i < this.length; i++) {
      this[0 + i - 1] = this[i];
    }
    this.length = this.length - 1;

    return answer;
  };
}

module.exports = applyCustomShift;
