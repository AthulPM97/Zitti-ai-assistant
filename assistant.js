/**
 * Represents the Zitti Assistant - a personal robotic assistant.
 * @module assistant
 */

const { greet } = require("./commands/greetings");
const { cleanRoom } = require("./commands/cleaning");
const { fetchNewspaper } = require("./commands/newspaper");
const { addToShoppingList, readShoppingList } = require("./commands/shopping");

/**
 * Class representing the Zitti Assistant.
 */
class ZittiAssistant {
  /**
   * Responds to the given command.
   * @param {string} command - The command issued to the assistant.
   * @returns {string} - The response generated by the assistant.
   */
  respondToCommand(command) {
    // Command handling logic...

    // Remove punctuation and convert to lowercase
    const formattedCommand = command.toLowerCase().replace(/[^\w\s]/g, "");

    if (formattedCommand === "hey how are you") {
      return greet();
    } else if (formattedCommand === "clean my room") {
      return cleanRoom();
    } else if (formattedCommand === "fetch the newspaper") {
      return fetchNewspaper();
    } else if (formattedCommand.startsWith("add ")) {
      const item = formattedCommand.split(" ")[1];
      return addToShoppingList(item);
    } else if (formattedCommand === "read my shopping list") {
      return readShoppingList();
    } else if (formattedCommand === "how much is 5 2") {
      return "Hmm.. I don't know that";
    } else if (formattedCommand === "hows the weather outside") {
      return "It's pleasant outside. You should take a walk.";
    } else {
      return "Hmm.. I don't know that";
    }
  }
}

module.exports = new ZittiAssistant();
