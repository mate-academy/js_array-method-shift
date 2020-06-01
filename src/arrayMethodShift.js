'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const deleteItem = this[0];

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    (this.length) ? this.length = this.length - 1 : this.length = 0;

    return deleteItem;
  };
}

module.exports = applyCustomShift;
