import * as z from 'zod';

export const codeSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt must be at least 1 character long',
  }),
});

export type TCodeSchema = z.TypeOf<typeof codeSchema>;
