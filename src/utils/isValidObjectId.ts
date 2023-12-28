import { Types } from 'mongoose';

export default function isValidObjectId(value: any): boolean {
  return Types.ObjectId.isValid(value);
}
