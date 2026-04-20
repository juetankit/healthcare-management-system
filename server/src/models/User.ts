import mongoose, { Schema } from "mongoose";
import type { IUser } from "../types/user.types.js";

const userSchema= new Schema<IUser>(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        role:{
            type:String,
            enum:["PATIENT","DOCTOR","ADMIN"],
            default:"PATIENT"
        },
        phone: String,
        specialization: String,
        age:Number,
        experience:Number,
        gender:String
    },
    {timestamps:true}
);

export default mongoose.model<IUser>("User", userSchema);
