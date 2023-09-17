import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import * as styles from './button.styles';

const buttonVariants = cva(styles.baseStyles, {
  variants: {
    variant: {
      default: styles.defaultVariantStyles,
      destructive: styles.destructiveVariantStyles,
      outline: styles.outlineVariantStyles,
      secondary: styles.secondaryVariantStyles,
      ghost: styles.ghostVariantStyles,
      link: styles.linkVariantStyles,
    },
    size: {
      default: styles.defaultSizeStyles,
      sm: styles.smSizeStyles,
      lg: styles.lgSizeStyles,
      icon: styles.iconSizeStyles,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
