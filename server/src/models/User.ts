import mongoose ,{Document,Schema} from "mongoose";
import { timeStamp } from "node:console";

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:"PATIENT"|"DOCTOR"|"ADMIN";
    phone?:string;
    specialization?:string;
    age?:number;
    experience?:number;
    gender?:string;
}

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
