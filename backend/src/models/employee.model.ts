import { Schema, model } from "mongoose";
import { IEmployee } from "../interfaces/employee.interface";

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    website: { type: String },
    role: { type: String, enum: ["Admin", "Editor", "Viewer"], required: true },
    isActive: { type: Boolean, default: true },
    skills: [{ type: String }],
    availableSlots: [{ type: String }],
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    company: {
      name: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default model<IEmployee>("Employee", employeeSchema);
