'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';

import * as styles from './index.styles';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export const Sidebar = () => {
  return (
    <div className={styles.wrapperStyles}>
      <div className={styles.spacingWrapperStyles}>
        <Link href="/dashboard" className={styles.logoLinkStyles}>
          <div className={styles.logoImageWrapperStyles}>
            <Image src="/logo.png" alt="Genius Logo" fill />
          </div>
          <h1 className={cn(styles.titleStyles, montserrat.className)}>
            Genius
          </h1>
        </Link>
      </div>
    </div>
  );
};
