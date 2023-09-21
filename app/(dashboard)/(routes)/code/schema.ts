import * as z from 'zod';

export const codeSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Code Prompt is required',
  }),
});

export type TCodeSchema = z.TypeOf<typeof codeSchema>;
