import React from 'react';
import { UserButton } from '@clerk/nextjs';

import { MobileSidebar } from '@/components/layout/mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';

import * as styles from './index.styles';

export const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className={styles.wrapperStyles}>
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className={styles.userButtonWrapperStyles}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
