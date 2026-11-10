'use strict';

const fn = function() {
  hoisted = 5;
  console.log({ hoisted });
  var hoisted;
  return hoisted;
};

module.exports = { fn };
