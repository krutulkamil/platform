import * as z from 'zod';

const resolutionSchema = z.enum(['512x512', '256x256', '1024x1024'], {
  required_error: 'Resolution is required',
});

const amountSchema = z.enum(['1', '2', '3', '4', '5'], {
  required_error: 'Amount is required',
});

export const imageSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Image Prompt is required',
  }),
  amount: amountSchema,
  resolution: resolutionSchema,
});

export type TImageSchema = z.TypeOf<typeof imageSchema>;
