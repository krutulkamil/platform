'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { routes } from '@/config/routes';

import * as styles from './index.styles';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

export const Sidebar = () => {
  const pathname = usePathname();

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
        <div className={styles.routesWrapperStyles}>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                styles.routeLinkStyles,
                pathname === route.href
                  ? styles.routeActiveStyles
                  : styles.routeInActiveStyles
              )}
            >
              <div className={styles.routeItemStyles}>
                <route.icon
                  className={cn(styles.routeIconStyles, route.color)}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
