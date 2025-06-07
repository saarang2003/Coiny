const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db/db");
const rootRouter = require('./routes/common');

dotenv.config();
connectDb();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173/",
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