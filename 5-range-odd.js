'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

function rangeOdd(start, end){
    let odd_numbers = [];
    for (let number = start; number <= end; number ++) {
        if (number % 2 !== 0){
            odd_numbers.push(number)
        }
    }
    return odd_numbers;
}
console.log(rangeOdd(15, 30))
module.exports = { rangeOdd };
