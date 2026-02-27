import express from 'express';
import path from 'path';
import cors from 'cors';
import { ENV } from './lib/env.js';
import { connectDB } from './lib/db.js';
import {serve} from 'inngest/express';
import { inngest } from './lib/inngest.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


//middleware
app.use(express.json());

// credentials: true meaning-> server will accept cookies from the client and also send cookies to the client. This is important for maintaining sessions and authentication when the client and server are on different domains or ports.

app.use(cors({ origin: ENV.CLIENT_URL , credentials: true }));

app.use("/api/inngest", serve({client:inngest, functions})); // This sets up the route for handling Inngest events. When an event is sent to /api/inngest, it will be processed by the functions defined in the Inngest instance.  



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