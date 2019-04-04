'use strict';

/**
 * Implement method shift
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    // write code here
  };
}

module.exports = applyCustomShift;
