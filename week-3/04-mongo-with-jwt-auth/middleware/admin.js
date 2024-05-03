const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// Load the JWT secret key from an environment variable or secure storage
const JWT_SECRET =  "deygobinda";

async function adminMiddleware(req, res, next) {
  try {
    // Extract the JWT token from the Authorization header
    const token = req.headers.token;
   

    // If no token is provided, return 401 Unauthorized
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Find the admin user in the database
    const admin = await Admin.findById(decoded.id);

    // If no admin user is found, return 403 Forbidden
    if (!admin) {
      return res.status(403).json({ message: "Admin not found" });
    }

    // Attach the admin object to the request object
    req.admin = admin;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If the token is invalid or an error occurs, return 403 Forbidden
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = adminMiddleware;