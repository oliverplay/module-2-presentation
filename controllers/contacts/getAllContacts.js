// Import the 'service' module from '../services' to interact with the data model.
const { contacts: service } = require("../../services");

// Controller function for retrieving all contacts.
const getAllContacts = async (req, res, next) => {
  // Call the 'getAllContacts' function from the 'service' module to fetch all contacts.
  const contacts = await service.getAllContacts();

  // Respond with a JSON object containing the fetched contacts.
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

// Export the 'getAllContacts' function to be used in 'routes/api/contacts.js'.
module.exports = getAllContacts;
