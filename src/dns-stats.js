const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let domainArr = [];
  for (let domain of domains) {
    domainArr.push(domain.split('.').reverse());
  }
  domainArr.forEach(elem => {
    let str = '';
    for (let i = 0; i < elem.length; i++) {
      str = str + '.' + elem[i];
      if (res[str]) {
        res[str] += 1;
      } else {
        res[str] = 1;
      }
    }
  })
  return res;
}

module.exports = {
  getDNSStats
};
