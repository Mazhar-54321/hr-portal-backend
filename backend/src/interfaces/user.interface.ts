import { Document } from 'mongoose';
export type UserRole = 'Admin' | 'Editor' | 'Viewer';
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}
