import React from 'react';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { FormControl, FormItem } from '@/components/ui/form';
import {
  Input as ShadcnInput,
  type InputProps as ShadcnInputProps,
} from '@/components/ui/input';
import { cn } from '@/utils/cn';

import * as styles from './index.styles';

type TInput<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  placeholder: string;
  isLoading: boolean;
  isSmall?: boolean;
  className?: string;
} & ShadcnInputProps;

export const Input = <T extends FieldValues>({
  name,
  control,
  placeholder,
  isLoading,
  isSmall = false,
  className,
}: TInput<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem
          className={cn(
            isSmall ? styles.formItemSmallStyles : styles.formItemStyles,
            className
          )}
        >
          <FormControl className={styles.formControlsStyles}>
            <ShadcnInput
              className={styles.formInputStyles}
              disabled={isLoading}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
