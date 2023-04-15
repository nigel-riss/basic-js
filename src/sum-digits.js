/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumOfDigits = n => {
  const getDigitAt = (n, pos) => 
    (10 ** pos <= n) ? ~~(n / 10 ** pos % 10) : false

  let sum = 0
  for (let i = 0, digit; digit !== false; i++) {
    digit = getDigitAt(n, i)
    sum += getDigitAt(n, i)
  }

  return (sum > 9) ? getSumOfDigits(sum) : sum
}

// Alternative
const getSumOfDigits2 = n => {
  const sum = `${n}`
    .split``
    .reduce((sum, digit) => sum + +digit, 0)
  return (sum > 9) ? getSumOfDigits2(sum) : sum
}


module.exports = {
  getSumOfDigits
};
