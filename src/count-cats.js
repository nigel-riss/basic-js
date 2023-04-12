/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const countCats = matrix => {
  const isCat = item => item === `^^`

  const countCatsInArray = arr => arr
    .reduce((cats, item) => cats + (isCat(item) ? 1 : 0), 0)

  return matrix
    .reduce((total, row) => total + countCatsInArray(row), 0)
}


module.exports = {
  countCats
};
