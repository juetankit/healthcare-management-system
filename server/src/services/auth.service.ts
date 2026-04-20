import User from '../models/User.js';
import bcrypt from "bcrypt";

import type { RegisterUserInput, LoginUserInput } from '../types/user.types.js';
import { hashPassword } from '../utils/hash.js';
import { createToken } from '../utils/jwt.js';

export const registerUser = async (data: RegisterUserInput) => {
  const { name, email, password, role = "PATIENT" } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return user;
};

export const loginUser = async ({ email, password }: LoginUserInput) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");



  const token = createToken(user);

  return { user, token };
};