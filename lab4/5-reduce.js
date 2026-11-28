'use strict';
let total = 0;
let num = 0;
const sum = (...args) => args.reduce((total, num) => total + num, 0);

module.exports = { sum };
