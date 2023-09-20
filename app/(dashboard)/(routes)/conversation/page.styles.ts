import { cn } from '@/lib/utils';

export const formWrapperStyles = cn('px-4 lg:px-8');

export const formStyles = cn(
  'rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
);

export const formItemStyles = cn('col-span-12 lg:col-span-10');

export const formControlsStyles = cn('m-0 p-0');

export const formInputStyles = cn(
  'border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
);

export const formButtonStyles = cn('col-span-12 lg:col-span-2 w-full');

export const messagesWrapperStyles = cn('space-y-4 mt-4');

export const messagesGridStyles = cn('flex flex-col-reverse gap-y-4');
