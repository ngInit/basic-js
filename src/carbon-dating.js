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
  const activityNumber = Number(sampleActivity);
  if (typeof sampleActivity !== 'string' ||
    isNaN(activityNumber) ||
    activityNumber > 15 ||
    activityNumber < 1) {
    return false;
  }
  const firstOrderReaction = Math.log(MODERN_ACTIVITY / activityNumber); // ln*([A]0/[A])
  const ln2 = Math.log(2).toFixed(3); // ln2 = 0.693
  return Math.ceil((firstOrderReaction * HALF_LIFE_PERIOD) / ln2);
}

module.exports = {
  dateSample
};
