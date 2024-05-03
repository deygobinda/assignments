const { User } = require('../db'); // Assuming you have a database model for User

// Middleware for handling user authentication
function userMiddleware(req, res, next) {
  // Get the username and password from the request headers
  const username = req.headers.username;
  const password = req.headers.password;

  // Check if the username and password are provided
  if (!username || !password) {
    return res.status(400).json({ msg: "Username and password are required" });
  }

  // Find a user with the provided username and password
  User.findOne({ username, password })
    .then(user => {
      if (user) {
        // If a user is found, move to the next middleware
        next();
      } else {
        // If no user is found, return a 403 Forbidden error
        res.status(403).json({ msg: "Invalid user credentials" });
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the database query
      console.error("Error in userMiddleware:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    });
}

module.exports = userMiddleware;