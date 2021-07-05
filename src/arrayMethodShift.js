'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function(...args) {
    let result = 0;
    let timeresult = this.splice(this.length - this.length, 1);
    timeresult.forEach(function(i) {
      result += i;
    });
    if (this.length === 0) {
      return undefined;
    } else {
      return result;
    }
  };
}

module.exports = applyCustomShift;
