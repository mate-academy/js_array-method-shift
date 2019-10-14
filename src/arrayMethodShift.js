'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const arr = this;
    let first;
    if (arr.length === 0) {
      first = undefined;
    } else {
      first = +arr.splice(0, 1).join();
    }
    return first;
  };
}

module.exports = applyCustomShift;
