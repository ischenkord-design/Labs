'use strict';

const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = { random };
