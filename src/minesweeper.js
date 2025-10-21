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
function minesweeper(matrix) {
  const result = new Array(matrix.length);
  for (let row = 0; row < matrix.length; row += 1) {
    result[row] = new Array(matrix[row].length).fill(0);
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (matrix[row - 1]?.[col] ||
        matrix[row + 1]?.[col] ||
        matrix[row - 1]?.[col - 1] ||
        matrix[row - 1]?.[col + 1] ||
        matrix[row + 1]?.[col - 1] ||
        matrix[row + 1]?.[col + 1]) {
        result[row][col] += 1;
      }
      if (matrix[row]?.[col - 1] || matrix[row]?.[col + 1]) {
        result[row][col] += 1;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
