/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = matrix => {
  const field = new Array(matrix.length)
    .fill(new Array(matrix[0].length).fill(0))

  // console.log(field)

  return field
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]))

console.log(minesweeper([
  [false, false, false],
  [false, false, false],
]))

module.exports = {
  minesweeper
};
