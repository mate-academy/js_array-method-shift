'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
    const firstElem = this[0];

    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      };

      this.length--;
    };
    return firstElem;
  };
};

module.exports = applyCustomShift;
