/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => arr
  .sort((a, b) => {
    if (a === -1 || b === -1) { return 0 }
    return a - b
  })

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]),
[-1, 150, 160, 170, -1, -1, 180, 190])

console.log(
  sortByHeight([4, 2, 9, 11, 2, 16]),
  [2, 2, 4, 9, 11, 16],
)

module.exports = {
  sortByHeight
};
