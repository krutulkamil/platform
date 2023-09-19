'use client';

import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

import { Sidebar } from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

import * as styles from './index.styles';

export const MobileSidebar = () => {
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
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
