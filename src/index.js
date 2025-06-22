//require('dotenv').config({path: './env'})
// import dotenv from "dotenv"
// import connectDb from './db/index.js';

// dotenv.config({
//     path: './env'
// })

// connectDb()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`Server is running on port: ${process.env.PORT}`);
        
 
//     })
// })
// .catch((err)=>{
//     console.log("MongoDB connection failed !!", err);
    
// })







/*
Lec1
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

/*
Lec 2
import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`Example app running on port ${port}`);
})*/

//Lec 3
/*import express from 'express'
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res)=> {
    res.send("hello");
})

app.get('/api/jokes', (req,res)=> {
    const jokes = [
        {
            id:1,
            title: 'Joke1',
            content: 'This is a joke'
        },
        {
            id:1,
            title: 'Joke2',
            content: 'This is a joke'
        }
    ];
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`Example app running on port ${port}`);
})*/

/*Lec5 */
