'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const saveArr = [];

    let firstElem;

    let count = 0;

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        firstElem = this[i];
      } else {
        saveArr[count] = this[i];
        count++;
      }
    }

    this.length = 0;

    for (let i = 0; i < saveArr.length; i++) {
      this[i] = saveArr[i];
    }

    return firstElem;
  };
}

module.exports = applyCustomShift;
