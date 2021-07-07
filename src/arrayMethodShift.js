'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const firstArrElements = this[0];
    const copyThisArr = [...this];
    let countIndexArr = 1;

    this.length = 0;

    for (let i = 0; i < copyThisArr.length - 1; i++) {
      this[i] = copyThisArr[countIndexArr];
      countIndexArr++;
    }

    return firstArrElements;
  };
}

module.exports = applyCustomShift;
