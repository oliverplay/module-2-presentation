// Import the 'contactsOperations' from '../../models/contacts'.
const contactsOperations = require("../../models/contacts");

// Service function for adding a new contact.
const addContact = async (body) => {
  try {
    // Call the 'addContact' function from 'contactsOperations' to add the new contact.
    const data = await contactsOperations.addContact(body);
    // Return the data (the newly added contact) to the caller.
    return data;
  } catch (err) {
    // If an error occurs during the operation, log the error message to the console.
    console.log(err.message);
  }
};

// Export the 'addContact' service function to be used in 'controllers/contacts/addContact.js'.
module.exports = addContact;
