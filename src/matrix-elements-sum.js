/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = matrix => {
  const alowedIndices = new Set(matrix[0].map((_el, i) => i))
  
  // Can be replaced with reduce, but more clear like this:
  let sum = 0
  matrix.forEach(row => {
    for (const index of alowedIndices) {
      row[index] === 0 
        ? alowedIndices.delete(index) 
        : sum += row[index]
    }
  })

  return sum
}


module.exports = {
  getMatrixElementsSum
};
