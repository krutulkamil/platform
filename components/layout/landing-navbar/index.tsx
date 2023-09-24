'use client';

import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/cn';

import * as styles from './index.styles';

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const buttonLink = isSignedIn ? '/dashboard' : '/sign-up';

  return (
    <nav className={styles.navWrapperStyles}>
      <Link href="/" className={styles.linkStyles}>
        <div className={styles.imageWrapperStyles}>
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <h1 className={cn(styles.logoTitleStyles, font.className)}>Genius</h1>
      </Link>
      <div className={styles.dynamicLinkStyles}>
        <Link href={buttonLink}>
          <Button variant="outline" className={styles.fullRoundedStyles}>
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
