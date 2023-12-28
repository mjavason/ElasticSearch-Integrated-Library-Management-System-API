import { Document, Types } from 'mongoose';

// Define the interface
export interface IResetToken extends Document {
  user: Types.ObjectId;
  token: string;
  expiresAt: Date;
  deleted?: boolean;
}
