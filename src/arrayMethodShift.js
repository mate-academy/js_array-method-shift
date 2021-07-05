'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return undefined;
    };

    const delItem = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    };
    this.length = this.length - 1;

    return delItem;
  };
}

module.exports = applyCustomShift;
