export const completionMessageRoleArr = [
  'user',
  'assistant',
  'system',
] as const;
export type TCompletionMessageRole = (typeof completionMessageRoleArr)[number];
