// Import required modules: Express, controller functions from '../controllers', and the middleware 'ctrlWrapper' from '../middlewares'.
const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");

// Create an instance of the Express Router.
const router = express.Router();

// Define routes and link them to corresponding controller functions using 'ctrlWrapper'.

// Route: GET '/api/contacts/'
// Description: This route is used to retrieve all contacts.
// Controller Function: 'getAllContacts' from the 'contacts' controller module.
// Middleware: 'ctrlWrapper' will handle any errors that may occur during the controller function execution.
router.get("/", ctrlWrapper(ctrl.getAllContacts));

// Route: POST '/api/contacts/'
// Description: This route is used to add a new contact.
// Controller Function: 'addContact' from the 'contacts' controller module.
// Middleware: 'ctrlWrapper' will handle any errors that may occur during the controller function execution.
router.post("/", ctrlWrapper(ctrl.addContact));

// Export the router to be used in 'app.js'.
module.exports = router;
