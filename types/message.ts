import type { TMessageRole } from '@/types/messageRole';

export interface IMessage {
  role: TMessageRole;
  content: string;
}
