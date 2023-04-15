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
  // Building an empty field
  const field = new Array(matrix.length)
    .fill(null)
    .map(_row => new Array(matrix[0].length).fill(0))

  const updateCell = (y, x) => {
    for (let dY = -1; dY < 2; dY++) {
      for (let dX = -1; dX < 2; dX++) {
        if (dY === 0 && dX === 0) continue      // If current cell skip
        if(matrix[y + dY]?.[x + dX]) {          // If is mined
          field[y][x]++
        }
      }
    }
  }
  
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field[y].length; x++) {
      updateCell(y, x)
    }
  }

  return field
}


module.exports = {
  minesweeper
};
