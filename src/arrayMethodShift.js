'use strict';

/**
 * Implement method shift
 *
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    let array = this;
    let element = array[0] ? array.splice(0, 1) : undefined;
    return element ? +element : undefined;
  };
}

module.exports = applyCustomShift;
