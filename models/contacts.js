// Import required modules: 'fs/promises' for file system operations, 'path' for file path manipulation, and 'uuid' for generating unique IDs.
const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

// Define the file path to the 'contacts.json' data file.
const filePath = path.join(__dirname, "contacts.json");

// Function to get all contacts from the 'contacts.json' file.
const getAllContacts = async () => {
  // Read the content of the 'contacts.json' file asynchronously using 'fs.readFile'.
  const data = await fs.readFile(filePath);

  // Parse the data into a JavaScript object (an array of contacts) using JSON.parse.
  const contacts = JSON.parse(data);

  // Return the contacts array to the caller.
  return contacts;
};

// Function to add a new contact to the 'contacts.json' file.
const addContact = async (body) => {
  // Get the existing contacts by calling the 'getAllContacts' function.
  const contacts = await getAllContacts();

  // Create a new contact object by spreading the 'body' object and adding a unique 'id' property using 'v4' from the 'uuid' module.
  const newContact = { ...body, id: v4() };

  // Add the new contact to the 'contacts' array.
  contacts.push(newContact);

  // Write the updated contacts array back to the 'contacts.json' file using 'fs.writeFile'.
  await fs.writeFile(filePath, JSON.stringify(contacts));

  // Return the newly added contact object to the caller.
  return newContact;
};

// Export the 'getAllContacts' and 'addContact' functions to be used in 'routes/api/contacts.js'.
module.exports = {
  getAllContacts,
  addContact,
};
