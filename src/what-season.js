const SEASONS = [
  `winter`,
  `spring`,
  `summer`,
  `autumn`,
]

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

  try {
    !isNaN(date.valueOf())
    const month = date.getMonth()
    const seasonIndex = ~~((month + 1) % 12 / 3)
    return SEASONS[seasonIndex]
  } catch (error) {
    throw new Error(`Invalid date!`)
  }
}


module.exports = {
  getSeason
};
