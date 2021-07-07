'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (!this.length) {
      return undefined;
    }

    const deleteElement = this[0];

    for (let j = 1; j < this.length; j++) {
      this[j - 1] = this[j];
    }
    this.length -= 1;

    return deleteElement;
  };
}

module.exports = applyCustomShift;

// [].__proto__.shift2 = function(number) {
//   const numberOfShift = (number === undefined) ? 1 : number;

//   if (this.length < numberOfShift) {
//     return undefined;
//   }

//   const deleteElements = [] ;

//   for (let i = 1; i <= numberOfShift; i++) {
//     deleteElements[i-1] = this[0];
//     for (let j = 1; j < this.length; j++) {
//       this[j-1] = this[j];
//     }
//     this.length = this.length - 1;
//   }

//   return deleteElements;
// }
