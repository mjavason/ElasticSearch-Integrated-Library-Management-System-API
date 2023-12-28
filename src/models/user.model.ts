import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces';
import { DATABASES } from '../constants';

const UserSchema = new Schema<IUser>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      required: true,
    },
    account_balance: {
      type: Number,
      required: false,
      select: false,
      default: 0,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    deleted: {
      type: Schema.Types.Boolean,
      required: false,
      select: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<IUser>(DATABASES.USER, UserSchema);
