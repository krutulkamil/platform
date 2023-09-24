'use client';

import React from 'react';
import { useAuth } from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import * as styles from './index.styles';

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  const buttonLink = isSignedIn ? '/dashboard' : '/sign-up';

  return (
    <div className={styles.heroWrapperStyles}>
      <div className={styles.titleWrapperStyles}>
        <h1>The Best AI Tool for</h1>
        <div className={styles.typewriterWrapperStyles}>
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot.',
                'Photo Generation.',
                'Music Generation.',
                'Code Generation.',
                'Video Generation.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className={styles.contentWrapperStyles}>
        Create content using AI 10x faster
      </div>
      <div>
        <Link href={buttonLink}>
          <Button variant="premium" className={styles.premiumButtonStyles}>
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className={styles.billingTextStyles}>No credit card required.</div>
    </div>
  );
};
