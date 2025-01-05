const { NotImplementedError } = require('../extensions/index.js');

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
  if (str.length === 0) return str;
  let res = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i + 1] === str[i]) {
      continue;
    } else if (count > 1) {
      res += count + str[i];
      count = 0;
    } else {
      res += str[i];
      count = 0;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
