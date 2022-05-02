const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let subResult = [];
  let additionSeparator = options.additionSeparator;
  if (additionSeparator === '') {
    additionSeparator = '|';
  }
  let separator = options.separator;
  if (separator === '') {
    separator = '+';
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    let tmp = options.addition;
    subResult.push(tmp);
  }
  let subArr = subResult.join(additionSeparator);
  for (let j = 0; j < options.repeatTimes; j++) {
    let tmp = str + subArr;
    result.push(tmp);
  }
  let arr = result.join(separator);
  return arr;
}

module.exports = {
  repeater
};
