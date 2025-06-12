const express = require("express");
const { authMiddleware, verifyPin } = require("../middleware/middleware");
const { getBalance, doTransfer, getHistory } = require("../controller/AccountController");


const router = express.Router();

router.get('/balance' , authMiddleware , getBalance);
router.post('/transfer' , authMiddleware , verifyPin , doTransfer);
router.get('/history' , authMiddleware ,  getHistory);

module.exports = router;