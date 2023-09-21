import { cn } from '@/lib/utils';

export const layoutWrapperStyles = cn('h-full relative');

export const sidebarWrapperStyles = cn(
  'hidden h-full md:flex md:w-72 md:col md:fixed md:inset-y-0 z-[80] bg-gray-900'
);

export const mainWrapperStyles = cn('md:pl-72 ');

export const formWrapperStyles = cn('px-4 lg:px-8');

export const formStyles = cn(
  'rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
);

export const formButtonStyles = cn('col-span-12 lg:col-span-2 w-full');

export const messagesWrapperStyles = cn('space-y-4 mt-4');

export const messagesGridStyles = cn('flex flex-col-reverse gap-y-4');

export const messageContentBaseStyles = cn(
  'p-8 w-full flex items-start gap-x-8 rounded-lg'
);

export const messageContentTextStyles = cn('text-sm');

export const userMessageStyles = cn('bg-white border border-black/10');

export const assistantMessageStyles = cn('bg-muted');

export const loaderWrapperStyles = cn(
  'p-8 rounded-lg w-full flex items-center justify-center bg-muted'
);

export const loaderPaddingStyles = cn('p-20');

export const imagesGridWrapperStyles = cn(
  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'
);

export const audioStyles = cn('w-full mt-8');
