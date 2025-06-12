const express = require("express");
const { signIn, signUp, upDateUser, getAllUser, getUser, createPin } = require("../controller/userController");
const { authMiddleware } = require("../middleware/middleware");


const router = express.Router();

router.post('/signin', signIn);
router.post('/signup' , signUp);
router.put('/update', authMiddleware ,upDateUser);
router.get('/users' , authMiddleware , getAllUser);
router.get('/me' , authMiddleware , getUser);
router.post('/create' , authMiddleware , createPin);


module.exports = router;