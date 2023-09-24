import React from 'react';

import * as styles from './layout.styles';

interface IProps {
  children: React.ReactElement;
}

export default function LandingLayout({ children }: IProps) {
  return (
    <main className={styles.mainWrapperStyles}>
      <div className={styles.sizingWrapperStyles}>{children}</div>
    </main>
  );
}
