import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


app.get('/',(req,res)=>{
    
    res.status(200).json({message: 'Hello Worldhiifgg'});
})





const startServer = async () => {
    try{
        await connectDB();
        app.listen(ENV.PORT, () => {
          
          console.log(`Server is running on port ${ENV.PORT}`);
         
});
    }
    catch(error){
        console.error("Failed to start server:", error);
    }
};

startServer();