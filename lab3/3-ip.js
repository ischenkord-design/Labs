'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  let result = 0;
  for(const part of ip.split('.')){
    result = (result << 8) + Number(part);
  }
  return result;
};

module.exports = { ipToInt };
