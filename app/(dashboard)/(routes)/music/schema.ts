import * as z from 'zod';

export const musicSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Music Prompt is required',
  }),
});

export type TMusicSchema = z.TypeOf<typeof musicSchema>;
