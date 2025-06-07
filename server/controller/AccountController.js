const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const z = require("zod");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/User");
const { Account } = require("../models/Account");
const { authMiddleware } = require("../middleware/middleware");

const router = express.Router();
