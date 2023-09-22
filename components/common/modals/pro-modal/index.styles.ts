import { cn } from '@/utils/cn';

export const dialogTitleStyles = cn(
  'flex justify-center items-center flex-col gap-y-4 pb-2'
);

export const dialogFlexWrapperStyles = cn(
  'flex items-center gap-x-2 font-bold py-1'
);

export const badgeStyles = cn('uppercase text-sm py-1');

export const dialogDescriptionStyles = cn(
  'text-center pt-2 space-y-2 text-zinc-900 font-medium'
);

export const toolCardWrapperStyles = cn(
  'p-3 border-black/5 flex items-center justify-between'
);

export const toolCardGridWrapperStyles = cn('flex items-center gap-x-4');

export const toolCardContentStyles = cn('p-2 w-fit rounded-md');

export const toolCardIconStyles = cn('h-6 w-6');

export const toolCardLabelStyles = cn('font-semibold text-sm');

export const toolCardCheckStyles = cn('text-primary w-5 h-5');

export const upgradeIconStyles = cn('w-4 h-4 ml-2 fill-white');

export const fullWidthStyles = cn('w-full');
