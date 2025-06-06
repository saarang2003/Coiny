const express = require("express");
const { signIn, signUp, upDateUser, getAllUser } = require("../controller/userController");
const { authMiddleware } = require("../middleware/middleware");

const singUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
});


const router = express.Router();

router.post('/signin', signIn);
router.post('/signup' , signUp);
router.put('/update', authMiddleware ,upDateUser);
router.get('/users' , authMiddleware , getAllUser);

module.exports = router;