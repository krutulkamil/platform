'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import * as styles from './index.styles';

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

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
        <div className={styles.routesWrapperStyles}>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={styles.routeLinkStyles}
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
