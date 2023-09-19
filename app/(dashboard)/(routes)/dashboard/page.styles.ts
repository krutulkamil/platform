import { cn } from '@/lib/utils';

export const headingWrapperStyles = cn('mb-8 space-y-4');

export const headingTitleStyles = cn(
  'text-2xl md:text-4xl font-bold text-center'
);

export const headingParagraphStyles = cn(
  'text-muted-foreground font-light text-sm md:text-lg text-center'
);

export const contentWrapperStyles = cn('px-4 md:px-20 lg:px-32 space-y-4');

export const pageCardWrapperStyles = cn(
  'p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
);

export const pageCardGridStyles = cn('flex items-center gap-x-4');

export const pageCardStyles = cn('p-2 w-fit rounded-md');

export const pageCardIconStyles = cn('w-8 h-8');

export const pageContentLabelStyles = cn('font-semibold');

export const arrowRightStyles = cn('w-5 h-5');
