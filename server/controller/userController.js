const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const dotenv = require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/User");
const { Account } = require("../models/Account");
const {History} = require('../models/History');

const { authMiddleware } = require("../middleware/middleware");

const singUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
});



export const signUp = async (req,res) =>{

    try {
         const { success } = singUpBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            });
        }
        const { username, password, firstName, lastName } = req.body;
        const isPresent = await User.findOne({ username });
        if (isPresent) {
            return res.status(411).json({
                message: "Email already taken / Incorrect inputs"
            });
        }

          const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);
        const user = await User.create({
            username: username,
            password: hashPass,
            firstName: firstName,
            lastName: lastName
        });

          const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        // creating account for user with random balance from 1 to 10000 
        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000
        });

         res.status(200).json({
            message: "User created successfully",
            token: token
        });


    } catch (error) {
         res.status(500).json({
            message: "Internal server error"
        });
    }
}

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});


export const signIn = async(req,res) =>{

    try {
            const { success } = signInBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Enter valid Inputs."
            });
        }
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(411).json({
                message: "Error while logging in!"
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(411).json({
                message: "Error while logging in!"
            });
        }

          const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);
        res.status(200).json({
            message: "Login successfully.",
            token: token
        });


    } catch (error) {
          res.status(500).json({
            message: "Internal server error!"
        });
    }
}
 

const updateUser = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});


export const upDateUser =  async(req,res) =>{
   
    try {
        const { success } = updateUser.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid Input"
        });
    }
   const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const data = {
            password: secPass,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        };
        await User.updateOne({ _id: req.userId }, data)
        res.status(200).json({
            message: "Updated successfully"
        });


    } catch (error) {
         return res.status(500).json({
            message: "Internal server error!"
        });
    }

}

export const getAllUser = async(req,res) =>{
   
    try {
        const filter = req.query.filter || "";

        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
        });


        const data = users.filter((i) => i._id != req.userId);
        res.status(200).json({
            users: data.map(user => ({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
            }))
        });


    } catch (error) {
         return res.status(500).json({
            message: "Internal server error!"
        });
    }
}

module.exports = {getAllUser , signIn , signUp , upDateUser};