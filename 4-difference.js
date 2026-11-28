'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => 
    array1.filter(item => !array2.includes(item));
console.log(difference([7, -2, 10, 5, 0], [0, 10]));
module.exports = { difference };
