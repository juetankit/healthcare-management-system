import { getAllUsers } from "../services/user.service.js";

export const getUsers=async(req:any,res:any)=>{

    try{
        const users=await getAllUsers();
        res.status(200).json({
            success:true,
            count:users.length,
            data:users
        })
    }catch(error){
        res.status(500).json({message:"Error fetching users"});
    }
}