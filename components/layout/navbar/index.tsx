import React from 'react';
import { UserButton } from '@clerk/nextjs';

import { MobileSidebar } from '@/components/layout/mobile-sidebar';

import * as styles from './index.styles';

export const Navbar = () => {
  return (
    <div className={styles.wrapperStyles}>
      <MobileSidebar />
      <div className={styles.userButtonWrapperStyles}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
