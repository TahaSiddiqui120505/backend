//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from './db/index.js';

dotenv.config({
    path: './env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port: ${process.env.PORT}`);
        
 
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!", err);
    
})







/*
import express from 'express';
const app = express();

// Connect to MongoDB
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("Error",(error)=>{
        console.log("error: ", error);
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log('App is listening on PORT ${process.env.PORT}');
        
       })
    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
})()
*/