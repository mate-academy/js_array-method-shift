'use strict';
/* eslint-disable */
/**
 * Implement method shift
 */


function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if(this.length === 0) {return undefined};

    var deletedElement = this[0];
    const end = this.length;

    for(let i = 0; i<end; i++) {
      this[i] = this[i+1];
    }

    this.length = this.length-1;

    return deletedElement;
  };
}

module.exports = applyCustomShift;



/*	
function applyCustomShift(thisIS) {	
    if(thisIS.length === 0) {return undefined};

    var deletedElement = thisIS[0];
    const end = thisIS.length;

    for(let i = 0; i<end; i++) {
      thisIS[i] = thisIS[i+1];
    }

    thisIS.length = thisIS.length-1;

    return deletedElement;
}	

let a = [0, 1, 2, 3]; 	
let a1 = [0, 1, 2, 3]; 	

console.log(applyCustomShift(a));	
console.log("a", a);

a1.shift();
console.log("a1----------------------------", a1);
// */