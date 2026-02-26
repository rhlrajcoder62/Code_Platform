import express from 'express';
import { ENV } from './lib/env.js';
const app = express();
const PORT = process.env.PORT || 5000;




app.get('/',(req,res)=>{
    
    res.status(200).json({message: 'Hello Worldhiifgg'});
})




app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
});