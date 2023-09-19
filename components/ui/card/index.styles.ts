import { cn } from '@/lib/utils';

export const cardStyles = cn(
  'rounded-lg border bg-card text-card-foreground shadow-sm'
);

export const cardHeaderStyles = cn('flex flex-col space-y-1.5 p-6');

export const cardTitleStyles = cn(
  'text-2xl font-semibold leading-none tracking-tight'
);

export const cardDescriptionStyles = cn('text-sm text-muted-foreground');

export const cardContentStyles = cn('p-6 pt-0');

export const cardFooterStyles = cn('flex items-center p-6 pt-0');
