import React from 'react';

import { LandingNavbar } from '@/components/layout/landing-navbar';
import { LandingHero } from '@/components/layout/landing-hero';
import { LandingContent } from '@/components/layout/landing-content';

import * as styles from './page.styles';

export default function LandingPage() {
  return (
    <div className={styles.fullWidthStyles}>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
