'use strict';

const sum = (...args) => {
  let total = 0;
  for (let value of args){
    total += value;
  }
  return total; 
};
console.log(sum(1,2,3))
module.exports = { sum };
