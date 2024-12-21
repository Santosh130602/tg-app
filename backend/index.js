// NODEMON--> to refresh the webpage without starting the server again
// "type": "module"--> to use import instead of const

// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/user.route.js"

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

dotenv.config();
const PORT = process.env.PORT || 5000
const URI=process.env.MONGODB_URI

try{
  mongoose.connect(URI)
  console.log("Connected to MongoDB")
} catch (error) {
  console.log(error)
}

// routes
app.use("/user", userRoute);
app.use("/message",messageRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

