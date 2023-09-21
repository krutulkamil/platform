import { cn } from '@/utils/cn';

export const baseStyles = cn(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
);

export const defaultVariantStyles = cn(
  'bg-primary text-primary-foreground hover:bg-primary/90'
);

export const destructiveVariantStyles = cn(
  'bg-destructive text-destructive-foreground hover:bg-destructive/90'
);

export const outlineVariantStyles = cn(
  'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
);

export const secondaryVariantStyles = cn(
  'bg-secondary text-secondary-foreground hover:bg-secondary/80'
);

export const ghostVariantStyles = cn(
  'hover:bg-accent hover:text-accent-foreground'
);

export const linkVariantStyles = cn(
  'text-primary underline-offset-4 hover:underline'
);

export const defaultSizeStyles = cn('h-10 px-4 py-2');

export const smSizeStyles = cn('h-9 rounded-md px-3');

export const lgSizeStyles = cn('h-11 rounded-md px-8');

export const iconSizeStyles = cn('h-10 w-10');
