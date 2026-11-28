'use strict';

const removeElements = (array, ...items) => {
  for (let i = array.length -1; i>=0; i--){
    if (items.includes(array[i])){
      array.splice(i, 1);
    }
  }
};

module.exports = { removeElements };
