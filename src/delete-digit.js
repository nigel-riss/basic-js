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
const deleteDigit = (n) => {
  // Used math approach instead of array approach because:
  // 1. It is faster
  // 2. I wanted to have fun
  const removeDigit = (number, pos) => {
    const before = ~~(number / 10 ** (pos + 1)) * 10 ** pos
    const after = number % 10 ** pos
    return before + after
  }

  let maxNumber = 0

  for (
    let i = 0, truncated = 0;
    truncated !== n;
    truncated = removeDigit(n, i), i++
  ) {
    maxNumber = (maxNumber < truncated)
      ? truncated 
      : maxNumber
  }

  return maxNumber
}


module.exports = {
  deleteDigit
};
