import { cn } from '@/utils/cn';

export const wrapperStyles = cn(
  'space-y-4 py-4 flex flex-1 flex-col h-full bg-[#111827] text-white'
);

export const spacingWrapperStyles = cn('px-3 py-2 flex-1');

export const logoLinkStyles = cn('flex items-center pl-3 mb-14');

export const logoImageWrapperStyles = cn('relative w-8 h-8 mr-4');

export const titleStyles = cn('text-2xl font-bold');

export const routesWrapperStyles = cn('space-y-1');

export const routeItemStyles = cn('flex items-center flex-1');

export const routeActiveStyles = cn('text-white bg-white/10');

export const routeInActiveStyles = cn('text-zinc-400');

export const routeLinkStyles = cn(
  'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition'
);

export const routeIconStyles = cn('h-5 w-5 mr-3');
