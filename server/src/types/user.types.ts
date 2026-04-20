import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "PATIENT" | "DOCTOR" | "ADMIN";
  phone?: string;
  specialization?: string;
  age?: number;
  experience?: number;
  gender?: string;
}

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  role?: "PATIENT" | "DOCTOR" | "ADMIN";
  phone?: string;
  specialization?: string;
  age?: number;
  experience?: number;
  gender?: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}