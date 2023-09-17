import React from 'react';

import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';

import * as styles from './layout.styles';

interface IProps {
  children: React.ReactElement;
}

export default function DashboardLayout({ children }: IProps) {
  return (
    <div className={styles.layoutWrapperStyles}>
      <div className={styles.sidebarWrapperStyles}>
        <Sidebar />
      </div>
      <main className={styles.mainWrapperStyles}>
        <Navbar />
        {children}
      </main>
    </div>
  );
}
