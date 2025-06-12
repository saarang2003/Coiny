// middleware.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Ensure bcrypt is imported
const dotenv = require("dotenv");
const { User } = require("../models/User");

dotenv.config();

const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(403).json({ message: "You are not authorized!" });
  }

  const token = header.split(" ")[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.userId) {
      req.userId = decode.userId;
      next();
    } else {
      return res.status(403).json({ message: "You are not authorized!" });
    }
  } catch (error) {
    return res.status(403).json({ message: "You are not authorized!" });
  }
};

const verifyPin = async (req, res, next) => {
  const { pin } = req.body;

  if (!pin || pin.length < 4) {
    return res.status(400).json({ message: "PIN is required and must be at least 4 digits" });
  }

  try {
    const user = await User.findById(req.userId);
    if (!user || !user.pin) {
      return res.status(403).json({ message: "PIN not set or user not found" });
    }

    const isMatch = await bcrypt.compare(pin, user.pin);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid PIN" });
    }

    next(); // PIN verified, proceed to transaction
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { authMiddleware, verifyPin };