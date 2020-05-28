'use strict';

function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return undefined;
    }

    const firstItem = this[0];

    for (let i = 0; i < (this.length - 1); i++) {
      this[i] = this[i + 1];
    }

    this.length--;

    return firstItem;
  };
}

module.exports = applyCustomShift;
