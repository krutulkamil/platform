import React from 'react';
import type { Metadata } from 'next';

import * as styles from './layout.styles';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Please sign in to continue.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.flexWrapperStyles}>{children}</div>;
}
