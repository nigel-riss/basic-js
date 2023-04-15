/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return arr
      .reduce((maxDepth, el) => {
        if (Array.isArray(el)) {
          const elDepth = this.calculateDepth(el)
          if (elDepth + 1 > maxDepth) {
            return elDepth + 1
          }
        }

        return maxDepth
      }, 1)
  }
}


module.exports = {
  DepthCalculator
};
