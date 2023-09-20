import type { TCompletionMessageRole } from '@/types/completionMessageRole';

export interface ICompletionMessage {
  role: TCompletionMessageRole;
  content: string;
}
