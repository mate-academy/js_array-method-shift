'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const items = this;
    const item = items[0];

    if (items.length < 1) {
      return undefined;
    }

    for (let i = 0; i < items.length; i++) {
      items[i] = items[i + 1];
    };
    items.length = items.length - 1;
    return item;
  };
}

module.exports = applyCustomShift;
