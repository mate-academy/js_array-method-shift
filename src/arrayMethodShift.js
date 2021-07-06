'use strict';

function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const result = this[0];

    if (this.length === 0) {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length--;

    return result;
  };
}
module.exports = applyCustomShift;
