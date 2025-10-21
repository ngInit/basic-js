const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let compressNumber = 1;
  for (let indexStr in str) {
    let index = Number(indexStr);
    if (str[index + 1] === str[index]) {
      compressNumber += 1;
    } else {
      compressNumber = compressNumber !== 1 ? compressNumber : '';
      result += `${compressNumber}` + str[index];
      compressNumber = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
