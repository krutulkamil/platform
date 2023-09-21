import * as z from 'zod';

export const videoSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Video Prompt is required',
  }),
});

export type TVideoSchema = z.TypeOf<typeof videoSchema>;
