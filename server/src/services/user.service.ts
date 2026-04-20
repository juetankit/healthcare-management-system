import User from "../models/User.js";
import type { IUser } from "../types/user.types.js";

export const getAllUsers = async (): Promise<IUser[]> => {
  const users = await User.find().select("-password"); // exclude password
  return users;
};