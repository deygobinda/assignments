const { Admin } = require("../db"); // Assuming you have a database model for Admin

// Middleware for handling admin authentication
function adminMiddleware(req, res, next) {
  // Get the username and password from the request headers
  const username = req.headers.username; // e.g., 'harkirat@gmail.com'
  const password = req.headers.password; // e.g., '123456'

  // Find an admin with the provided username and password
  Admin.findOne({ username, password })
    .then(admin => {
      if (admin) {
        // If an admin is found, move to the next middleware
        next();
      } else {
        // If no admin is found, return a 403 Forbidden error
        res.status(403).json({ msg: "Invalid admin credentials" });
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the database query
      console.error("Error in adminMiddleware:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
}

module.exports = adminMiddleware;