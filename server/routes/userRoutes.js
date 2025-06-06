const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const {User} = require('../models/User');
const {Account} = require('../models/Account');
const { authMiddleware } = require('../middleware/middleware')

const singUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
});


const router = express.Router();

router.post('/signup' , async(req,res) =>{
    
})