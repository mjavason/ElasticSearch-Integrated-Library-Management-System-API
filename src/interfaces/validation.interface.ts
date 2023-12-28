import { z } from 'zod';

export interface IValidation {
  create: {
    body: z.ZodObject<any>;
  };

  update: {
    body: z.ZodObject<any>;
  };

  find: {
    query: z.ZodObject<any>;
  };
}
