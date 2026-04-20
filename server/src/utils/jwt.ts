import jwt  from "jsonwebtoken";


export const createToken = (user:any) => {
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
    );
    return token;



}