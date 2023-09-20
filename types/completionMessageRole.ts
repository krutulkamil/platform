export const completionMessageRoleArr = ['user', 'assistant'] as const;
export type TCompletionMessageRole = (typeof completionMessageRoleArr)[number];
