// Import the 'getAllContacts' and 'addContact' controller functions from their respective files.
const getAllContacts = require("./getAllContacts");
const addContact = require("./addContact");

// Export an object containing the imported controller functions.
module.exports = {
  getAllContacts,
  addContact,
};
