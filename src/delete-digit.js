const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split('');
  let res = arrN.map((_, index) => {
    const temp = n.toString().split('');
    temp.splice(index, 1);
    return temp.join('');
  });
  res.sort((a, b) => b - a);
  return Number(res[0]);
}

module.exports = {
  deleteDigit
};
