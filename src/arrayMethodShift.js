'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const items = this;

    if (items.length === 0) {
      return undefined;
    }

    const element = items[0];

    for (let i = 0; i < items.length - 1; i++) {
      items[i] = items[i + 1];
    }

    items.length = items.length - 1;

    return element;
  };
};

module.exports = applyCustomShift;
