'use strict';

const sum = (...args) => {
  let total = 0;
  let a = 0;
  while (a < args.length){
    total += args[a];
    a++;
  }
  return total;
};

console.log(sum(1,2,3));
module.exports = { sum };
