const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  } 
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === '--discard-next' && (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev')) {
      i = i + 2;
    } else if (element === '--double-next' && arr[i + 2] === '--double-prev') {
      newArr.push(arr[i + 1]);
      newArr.push(arr[i + 1]);
      newArr.push(arr[i + 1]);
      i = i + 2;
    } else if (element === '--double-next' && element === '--discard-prev') {
      newArr.push(arr[i + 1]);
      i = i + 2;
    } else if ((element === '--discard-prev' || element === '--double-prev') && i === 0) {
      continue;
    } else if ((element === '--discard-next' || element === '--double-next') && i + 1 === arr.length) {
      continue;
    } else if (element === '--discard-next') {
      i++;
    } else if (element === '--discard-prev') {
      newArr.pop();
    } else if (element === '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (element === '--double-prev') {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
