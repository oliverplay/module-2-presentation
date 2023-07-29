1. MVC (Model-View-Controller) pattern
2. Structure
   - `app.js` is the main entry point of your application
   - `server.js` imports the app.js and starts the server on port 3000.
   - `routes/api/contacts.js` API routes.
   - `controllers/contacts/...` controller function responsible for ...
   - `middlewares/ctrlWrapper.js` a wrapper middleware function that handles the try-catch block for each controller.
   - `models/contacts.js` defines the data model for contacts and provides functions to interact with the data
   - `services/contacts/...` part of the services layer and calls ...
   - `schemas/contacts.js` - Joi schema for validation
