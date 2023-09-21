import * as z from 'zod';

export const conversationSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Conversation Prompt is required',
  }),
});

export type TConversationSchema = z.TypeOf<typeof conversationSchema>;
