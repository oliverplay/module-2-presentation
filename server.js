// Import the 'app' module from the './app' file
const app = require("./app");

// Set up the server to listen on port 3000
app.listen(3000, () => {
  // This callback function runs when the server starts successfully
  console.log("Server running. Use our API on port: 3000");
});
