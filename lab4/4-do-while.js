'use strict';

const sum = (...args) => {
  let total = 0;
  let a = 0;
  do {
    total += args[a];
    a++;
  } while (a < args.length);
  return total;
};

module.exports = { sum };
