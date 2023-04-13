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
const encodeLine = (str) => {
  let encrypted = ``
  let currChar = ``
  let reps = 0

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === currChar) {
      reps++
    } else {
      encrypted += `${reps > 1 ? reps : ``}${currChar}`
      reps = 1
      currChar = str[i]
    }
  }

  return encrypted
}


module.exports = {
  encodeLine
};
