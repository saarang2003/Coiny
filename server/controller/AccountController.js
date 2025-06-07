const express = require("express");
const { User } = require("../models/User");
const { Account } = require("../models/Account");


const router = express.Router();


const getBalance = async(req,res) =>{

    try {
         const account = await Account.findOne({
            userId: req.userId
        })
        const user = await User.findOne({ _id: req.userId }).select(['-password'])
        // console.log(user);
        res.json({
            balance: account.balance,
            user: user
        });
    } catch (error) {
         return res.status(500).json({
            message: "Internal server error!"
        });
    }
}

//  Very important start session mongodb for consistency 
const doTransfer = async(req,res) =>{
    try {

         const session = await mongoose.startSession();
         session.startTransaction();
        const { amount, to } = req.body;

         if (amount <= 0) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Enter valid amount"
            });
        }

         const send = await User.findOne({ _id: req.userId }).session(session);
           const receive = await User.findOne({ _id: to }).session(session);

             if (!send ) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Sender's Account doesn't exist!"
            });
        }

            if (!receive ) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Receiver's Account doesn't exist!"
            });
        }

         // fetch the accounts within the transaction
        const account = await Account.findOne({ userId: req.userId }).session(session);

          if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }
  const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

          // perform transfer  ($inc accept position and negative values )
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

         await History.create([{
            sendId: send._id,
            receiverId: receive._id,
            senderFirstName: send.firstName,
            senderLastName: send.lastName,
            receiverFirstName: receive.firstName,
            receiverLastName: receive.lastName,
            amount
        }], session);

         // commit transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
        
    } catch (error) {
         return res.status(500).json({
            message: "Internal server error!"
        });
    }
}


const getHistory = async(req,res) =>{

    try {
         const user = await User.findOne({ _id: req.userId })

         const response = await History.find({
            $or: [{
                senderFirstName: {
                    "$regex": user.firstName,
                }
            }, {
                receiverFirstName: {
                    "$regex": user.firstName,
                }
            }]
        }); 
        res.json({
            user: user.firstName,
            history: response
        });
        
    } catch (error) {
         return res.status(500).json({
            message: "Internal server error!"
        });
    }
}

module.exports = {getBalance , doTransfer , getHistory};