const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/User");
const { Account } = require("../models/Account");
const { authMiddleware } = require("../middleware/middleware");

const router = express.Router();
