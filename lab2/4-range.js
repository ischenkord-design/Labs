'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

function range(start, end){
    const numbers = [];
    let i = start;
    while (i<=end) {
        numbers.push(i);
        i++;
    }
    return numbers;
};
x
module.exports = { range };
