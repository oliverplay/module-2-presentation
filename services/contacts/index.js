// Import the 'getAllContacts' and 'addContact' service functions from their respective files.
const getAllContacts = require("./getAllContacts");
const addContact = require("./addContact");

// Export an object containing the imported service functions.
module.exports = {
  getAllContacts,
  addContact,
};
