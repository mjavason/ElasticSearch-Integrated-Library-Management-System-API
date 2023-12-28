import { z } from 'zod';
import isValidObjectId from '../utils/isValidObjectId';

export const objectIdValidator = z
  .string()
  .refine(isValidObjectId, { message: 'Invalid ObjectId' });

class Validation {
  find = {
    query: z.object({
      id: z
        .string()
        .refine(isValidObjectId, {
          message: 'Invalid ObjectId',
        })
        .optional(),
    }),
    params: z.object({
      id: z
        .string()
        .refine(isValidObjectId, {
          message: 'Invalid ObjectId',
        })
        .optional(),
    }),
    body: z.object({
      id: z
        .string()
        .refine(isValidObjectId, {
          message: 'Invalid ObjectId',
        })
        .optional(),
    }),
  };
}

export const objectIdValidation = new Validation();
