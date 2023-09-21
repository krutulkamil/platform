import * as z from 'zod';

export const imageSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Image Prompt is required',
  }),
  amount: z.string().min(1, {
    message: 'Amount is required',
  }),
  resolution: z.string().min(1, {
    message: 'Resolution is required',
  }),
});

export type TImageSchema = z.TypeOf<typeof imageSchema>;
