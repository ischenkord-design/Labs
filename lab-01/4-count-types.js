'use strict';

function countTypesInArray(input) {
  const cnt = {};

  for (const i of input) {
    const type = typeof i;
    if (!(type in cnt)) {
      cnt[type] = 0;
    }

    cnt[type]++;
  }
  return cnt;
}

module.exports = { countTypesInArray };
