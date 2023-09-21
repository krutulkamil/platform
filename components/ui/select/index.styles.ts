import { cn } from '@/lib/utils';

export const selectTriggerStyles = cn(
  'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
);

export const selectIconStyles = cn('h-4 w-4 opacity-50');

export const selectContentStyles = cn(
  'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'
);

export const selectContentPopperStyles = cn(
  'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1'
);

export const selectViewportStyles = cn('p-1');

export const selectViewportPopperStyles = cn(
  'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
);

export const selectLabelStyles = cn('py-1.5 pl-8 pr-2 text-sm font-semibold');

export const selectItemStyles = cn(
  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
);

export const selectItemSpanStyles = cn(
  'absolute left-2 flex h-3.5 w-3.5 items-center justify-center'
);

export const selectItemIconStyles = cn('h-4 w-4');

export const selectSeparatorStyles = cn('-mx-1 my-1 h-px bg-muted');
