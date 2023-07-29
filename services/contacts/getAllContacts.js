// Import the 'contactsOperations' module from '../../models/contacts'.
const contactsOperations = require("../../models/contacts");

// Service function for retrieving all contacts.
const getAllContacts = async () => {
  try {
    // Call the 'getAllContacts' function from 'contactsOperations' to fetch all contacts.
    const data = await contactsOperations.getAllContacts();
    // Return the data (an array of contacts) to the caller.
    return data;
  } catch (error) {
    // If an error occurs during the operation, log the error message to the console.
    console.log(error.message);
  }
};

// Export the 'getAllContacts' service function to be used in 'controllers/contacts/getAllContacts.js'.
module.exports = getAllContacts;
