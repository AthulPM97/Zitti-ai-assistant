/**
 * Contains functions related to shopping list management.
 * @module commands/shopping
 */

/**
 * Adds an item to the shopping list and generates a response.
 * @param {string} item - The item to add to the shopping list.
 * @returns {string} - The response indicating the item addition status.
 */

const shoppingList = [];

function addToShoppingList(item) {
  // Shopping list addition logic...
  if (shoppingList.includes(item)) {
    return `You already have ${item} in your shopping list`;
  } else {
    shoppingList.push(item);
    return `${item} added to your shopping list`;
  }
}
/**
 * Reads the shopping list and generates a response.
 * @returns {string} - The response containing the shopping list items.
 */

function readShoppingList() {
  // Shopping list reading logic...
  if (shoppingList.length === 0) {
    return 'You have no items in your shopping list';
  } else {
    return `Here is your shopping list: ${shoppingList.join(', ')}`;
  }
}

module.exports = { addToShoppingList, readShoppingList };