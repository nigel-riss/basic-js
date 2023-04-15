/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = arr => {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  const transformed = []

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]

    switch (el) {
      case `--discard-next`:
        transformed.push(undefined)
        i++
        break
      case `--discard-prev`:
        transformed.pop()
        break;
      case `--double-next`:
        transformed.push(arr[i + 1])
        break;
      case `--double-prev`:
        transformed.push(transformed[transformed.length - 1])
        break;
    
      default:
        transformed.push(el)
        break;
    }
  }

  return transformed.filter(el => el !== undefined)
}


module.exports = {
  transform
};
