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
const getCommonCharacterCount = (s1, s2) => {
  const getCharMap = s => {
    const charMap = {}
    for (let i = 0; i < s.length; i++) {
      charMap[s[i]] ? charMap[s[i]]++ : charMap[s[i]] = 1
    }
    return charMap
  }

  const s1CharMap = getCharMap(s1)
  const s2CharMap = getCharMap(s2)

  let commonNum = 0
  for (const char in s1CharMap) {
    if (s2CharMap[char]) {
      commonNum += Math.min(s1CharMap[char], s2CharMap[char])
    }
  }

  return commonNum
}

module.exports = {
  getCommonCharacterCount
};
