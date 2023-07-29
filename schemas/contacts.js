// Import the Joi module for data validation.
const Joi = require("joi");

// Define the 'contactSchema' using the Joi.object() method.
const contactSchema = Joi.object({
  // Define the 'name', 'email', and 'phone' properties with their respective Joi string() validators and .required() to make them required fields.
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

// Export the 'contactSchema' to be used in other parts of the application.
module.exports = contactSchema;
