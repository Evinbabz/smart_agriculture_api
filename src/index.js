import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import diseaseRoutes from './modules/pdisease/pdisease.routes.js'
dotenv.config();
const server = express();
const PORT = 8080


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connnected to mongoDB successfully")
})

server.use(cors({
    origin:"*"
}))
server.use(express.json());

//routes
server.use("/api/disease",diseaseRoutes)

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

