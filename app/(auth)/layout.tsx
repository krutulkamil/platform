import React from 'react';
import type { Metadata } from 'next';

import * as styles from './layout.styles';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Please sign in to continue.',
};

interface IProps {
  children: React.ReactElement;
}

export default function AuthLayout({ children }: IProps) {
  return <div className={styles.flexWrapperStyles}>{children}</div>;
}
