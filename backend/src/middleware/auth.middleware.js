import { User } from "../models/user.model.js"; 
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    // Looks for JWT token in cookies...
    const token = req.cookies.jwt;
    if (!token) {
      console.log("No JWT token found in cookies");
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    // Verify if the token is valid...
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userID) {
      console.log("Invalid token or missing userID in payload");
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findOne({ where: { id: decoded.userID } });
    if (!user) {
      console.log("No user found with ID from token:", decoded.userID);
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};