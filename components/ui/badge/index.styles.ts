import { cn } from '@/utils/cn';

export const badgeBaseStyles = cn(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
);

export const badgeDefaultVariantStyles = cn(
  'border-transparent bg-primary text-primary-foreground hover:bg-primary/80'
);

export const badgeSecondaryVariantStyles = cn(
  'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'
);

export const badgeDestructiveVariantStyles = cn(
  'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80'
);

export const badgeOutlineVariantStyles = cn('text-foreground');

export const badgePremiumVariantStyles = cn(
  'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-foreground border-0'
);
