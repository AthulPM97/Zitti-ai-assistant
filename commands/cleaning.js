/**
 * Contains functions related to room cleaning.
 * @module commands/cleaning
 */

/**
 * Cleans the room and generates a response.
 * @returns {string} - The response indicating the room cleaning status.
 */

const { getCurrentTime } = require("../utils/datetime");

let lastCleanedTime = null;

function cleanRoom() {
  // Room cleaning logic...
  const currentTime = getCurrentTime();
  if (
    lastCleanedTime !== null &&
    (currentTime - lastCleanedTime) / 1000 < 600
  ) {
    const minutes = Math.floor((currentTime - lastCleanedTime) / 1000 / 60);
    return `The room was just cleaned ${minutes} minute(s) ago. I hope it's not dirty`;
  } else {
    lastCleanedTime = currentTime;
    return `Room is cleaned. It looks tidy now. Job completed at ${currentTime}`;
  }
}

module.exports = { cleanRoom };
