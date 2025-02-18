// NODEMON--> to refresh the webpage without starting the server again
// "type": "module"--> to use import instead of const

// const express = require('express')
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js"
import { app, server } from "./socketIO/server.js";

// const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

dotenv.config();
const PORT = process.env.PORT || 8000
const URI=process.env.MONGODB_URI

try{
  mongoose.connect(URI)
  console.log("Connected to MongoDB")
} catch (error) {
  console.log(error)
}

app.get('/',(req,res)=>{
  res.send('Welcom to tg-app')
})

// routes
app.use("/api/user", userRoute);
app.use("/api/message",messageRoute);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

