import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app=express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);


app.get('/',(req,res)=>{
    res.send('API is running');
});

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});