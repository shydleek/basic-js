const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof +sampleActivity === 'number' && sampleActivity !== '' && typeof sampleActivity === 'string'){
    let finalActivity = +sampleActivity;
    if(finalActivity > 0 && finalActivity < 15){
      let ln2 = 0.693;
      let ln = Math.log(finalActivity / MODERN_ACTIVITY);
      let k = ln2 / HALF_LIFE_PERIOD;
      let result = Math.ceil(ln / k);
      return - result + 1;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
