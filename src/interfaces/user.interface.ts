import { Document } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  account_balance: number;
  deleted?: boolean;
}
