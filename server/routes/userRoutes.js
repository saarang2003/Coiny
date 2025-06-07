const express = require("express");
const { signIn, signUp, upDateUser, getAllUser } = require("../controller/userController");
const { authMiddleware } = require("../middleware/middleware");


const router = express.Router();

router.post('/signin', signIn);
router.post('/signup' , signUp);
router.put('/update', authMiddleware ,upDateUser);
router.get('/users' , authMiddleware , getAllUser);

module.exports = router;