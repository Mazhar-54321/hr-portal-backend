import { Document } from "mongoose";
import { UserRole } from "./user.interface";

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
}

export interface IEmployee extends Document {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  role: UserRole;
  isActive: boolean;
  skills: string[];
  availableSlots: string[];
  address: Address;
  company: Company;
  createdAt?: Date;
  updatedAt?: Date;
}