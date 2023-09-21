import React from 'react';
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { FormControl, FormItem } from '@/components/ui/form';
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/utils/cn';

import * as styles from './index.styles';

type TSelect<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  options: Array<{ value: string; label: string }>;
  isLoading: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export const Select = <T extends FieldValues>({
  name,
  control,
  options,
  isLoading,
  className,
}: TSelect<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={cn(styles.formSelectItemStyles, className)}>
          <ShadcnSelect
            disabled={isLoading}
            onValueChange={field.onChange}
            defaultValue={field.value}
            {...field}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue defaultValue={field.value} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </ShadcnSelect>
        </FormItem>
      )}
    />
  );
};
