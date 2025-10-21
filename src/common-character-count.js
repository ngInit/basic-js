/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');

  return s2.split('').map((item) => {
    if (arr1.includes(item)) {
      arr1.splice(arr1.indexOf(item), 1);
      return item;
    }
  }).join('').length;
}

module.exports = {
  getCommonCharacterCount
};
