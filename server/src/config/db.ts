import mongoose from "mongoose";

export const connectDB= async ()=>{
    try{
        const conn=mongoose.connect(process.env.MONGO_URI as string);
        console.log(`Mongo DB connected ${(await conn).connection.host}`);

    }
    catch(error){
        console.error(error);
        process.exit(1);
    }

}