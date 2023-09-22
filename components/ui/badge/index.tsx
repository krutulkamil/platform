import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import * as styles from './index.styles';

const badgeVariants = cva(styles.badgeBaseStyles, {
  variants: {
    variant: {
      default: styles.badgeDefaultVariantStyles,
      secondary: styles.badgeSecondaryVariantStyles,
      destructive: styles.badgeDestructiveVariantStyles,
      outline: styles.badgeOutlineVariantStyles,
      premium: styles.badgePremiumVariantStyles,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
