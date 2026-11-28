'use strict';

const max = (matrix) => {
  let biggest = matrix[0][0];
  for (let i = 0; i < matrix.length; i++){
    const row = matrix[i];

    for (let j =0; j<row.length; j++){
      const number = row[j];
      if (number > biggest){
        biggest = number;
      }
    }
  }
  return biggest;
};

module.exports = { max };
