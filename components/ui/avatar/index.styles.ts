import { cn } from '@/utils/cn';

export const avatarPrimitiveStyles = cn(
  'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
);

export const avatarImageStyles = cn('aspect-square h-full w-full');

export const avatarFallbackStyles = cn(
  'flex h-full w-full items-center justify-center rounded-full bg-muted'
);
