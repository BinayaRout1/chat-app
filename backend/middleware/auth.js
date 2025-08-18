import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    // Get token (from Authorization header OR custom "token" header)
    const token = req.headers.authorization?.split(" ")[1] || req.headers.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
