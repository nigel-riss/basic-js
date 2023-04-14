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
const dateSample = sampleActivity => {
  // Validation
  if (typeof sampleActivity !== `string`) { return false }
  const activity = Number.parseFloat(sampleActivity)
  if (
    isNaN(activity) 
    || activity > MODERN_ACTIVITY
    || activity <= 0
  ) { return false }

  const kt = Math.log(2)
  const l = Math.log(activity / MODERN_ACTIVITY)
  return Math.ceil((l / -kt) * HALF_LIFE_PERIOD)
}


module.exports = {
  dateSample
};
