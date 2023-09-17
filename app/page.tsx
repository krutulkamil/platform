import React from 'react';

import { Button } from '@/components/ui/button';

import * as styles from './page.styles';

export default function Home() {
  return (
    <>
      <p className={styles.paragraphStyles}>Hello AI</p>
      <Button>Click me</Button>
    </>
  );
}
