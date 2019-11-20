'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const result = this[0];
    const tmpArr = Array(this.length - 1);

    for (let i = 1; i < this.length; i++) {
      tmpArr[i - 1] = this[i];
    }

    this.length -= 1;

    for (let i = 0; i < this.length; i++) {
      this[i] = tmpArr[i];
    }

    return result;
  };
}

module.exports = applyCustomShift;
