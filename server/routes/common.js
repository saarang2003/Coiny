const express = require("express");
const userRouter = require('../routes/userRoutes');
const accountRouter = require('../routes/AccountRoutes');


const router = express.Router();

router.use('/user' , userRouter);
router.use('/account' , accountRouter);
module.exports = router;