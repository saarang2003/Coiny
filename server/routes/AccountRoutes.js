const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { getBalance, doTransfer, getHistory } = require("../controller/AccountController");


const router = express.Router();

router.get('/balance' , authMiddleware , getBalance);
router.post('/transfer' , authMiddleware , doTransfer);
router.get('/history' , getHistory);

module.exports = router;