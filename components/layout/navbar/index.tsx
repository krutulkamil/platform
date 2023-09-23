import React from 'react';
import { UserButton } from '@clerk/nextjs';

import { MobileSidebar } from '@/components/layout/mobile-sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

import * as styles from './index.styles';

export const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className={styles.wrapperStyles}>
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className={styles.userButtonWrapperStyles}>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
