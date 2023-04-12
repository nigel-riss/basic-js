/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = date => {
  if (!date) {
    return `Unable to determine the time of year!`
  }

  if (!(date instanceof Date)) {
    return `Invalid date!`
  }
}

module.exports = {
  getSeason
};
