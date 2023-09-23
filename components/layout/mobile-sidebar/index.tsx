'use client';

import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

import { Sidebar } from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

import * as styles from './index.styles';

interface IProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className={styles.ghostButtonStyles}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={styles.sheetContentStyles}>
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};
