/**
 * Contains functions related to fetching the newspaper.
 * @module commands/newspaper
 */

/**
 * Fetches the newspaper and generates a response.
 * @returns {string} - The response indicating the newspaper fetching status.
 */

const { getCurrentDate } = require('../utils/datetime');

let lastFetchedNewspaperDate = null;

function fetchNewspaper() {
  // Newspaper fetching logic...
  const currentDate = getCurrentDate();
  if (lastFetchedNewspaperDate !== null && lastFetchedNewspaperDate === currentDate) {
    return "I think you don't get another newspaper the same day";
  } else {
    lastFetchedNewspaperDate = currentDate;
    return 'Here is your newspaper';
  }
}

module.exports = { fetchNewspaper };