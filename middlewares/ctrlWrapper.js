// Middleware function 'ctrlWrapper' takes a controller function 'ctrl' as an argument.
const ctrlWrapper = (ctrl) => {
  // The returned middleware function is an async function that takes 'req', 'res', and 'next' as arguments.
  return async (req, res, next) => {
    try {
      // The 'ctrl' function (the original controller function) is executed with 'req', 'res', and 'next' as arguments.
      await ctrl(req, res, next);
    } catch (error) {
      // If an error occurs during the execution of 'ctrl', it's caught here, and the 'next' function is called with the 'error'.
      next(error);
    }
  };
};

// Export the 'ctrlWrapper' middleware function to be used in other parts of the application.
module.exports = ctrlWrapper;
