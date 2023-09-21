import * as z from 'zod';

const resolutionSchema = z.enum(['512x512', '256x256', '1024x1024']);

export const imageSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Image Prompt is required',
  }),
  amount: z.string().min(1, {
    message: 'Amount is required',
  }),
  resolution: resolutionSchema,
});

export type TImageSchema = z.TypeOf<typeof imageSchema>;
