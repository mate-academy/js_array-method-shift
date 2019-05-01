'use strict';

/**
 * Implement method shift
 *
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let result = 0;
    let tempresult = this.splice(0, 1);
    tempresult.forEach(function(i) {
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
