const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db/db");
const rootRouter = require('./routes/common');

dotenv.config();
connectDb();

const PORT = process.env.PORT;
const app = express();
const ratelimiter = require('express-rate-limit');

const limiter = ratelimiter({
    max: 300,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP"
})


app.use(limiter);

app.use(express.json());
app.use(
    cors({
      origin: "https://coiny-frontend.onrender.com",
      methods: ["GET", "POST", "DELETE", "PUT" , "PATCH"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],

    })
  );

  app.use("/api/v1", rootRouter);  
  app.listen(5000, ()=> {
    console.log(`server is running` , PORT);
})