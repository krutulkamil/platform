export const messageRoleArr = ['user', 'assistant'] as const;
export type TMessageRole = (typeof messageRoleArr)[number];
