import React from 'react';
import { Menu } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

import * as styles from './index.styles';

export const Navbar = () => {
  return (
    <div className={styles.wrapperStyles}>
      <Button variant="ghost" size="icon" className={styles.ghostButtonStyles}>
        <Menu />
      </Button>
      <div className={styles.userButtonWrapperStyles}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
