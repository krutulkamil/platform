import React from 'react';

import { Navbar } from '@/components/layout/navbar';
import { Sidebar } from '@/components/layout/sidebar';
import { getApiLimitCount } from '@/lib/api-limit';

import * as styles from './layout.styles';

interface IProps {
  children: React.ReactElement;
}

export default async function DashboardLayout({ children }: IProps) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className={styles.layoutWrapperStyles}>
      <div className={styles.sidebarWrapperStyles}>
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className={styles.mainWrapperStyles}>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
