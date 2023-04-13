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
const getDNSStats = (domains) => {
  const dnsStats = {}

  const allDomains = domains
    .map(domain => {
      let subdomain = ``
      return domain
        .split(`.`)
        .reverse()
        .map(part => {
          subdomain += `.`
          return subdomain += part
        })
    })

  allDomains.forEach(domain => domain
    .forEach(subdomain => {
      dnsStats[subdomain]
        ? dnsStats[subdomain]++
        : (dnsStats[subdomain] = 1)
    })
  )

  return dnsStats
}

console.log(getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]))

module.exports = {
  getDNSStats
};
