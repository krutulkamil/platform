import React from 'react';
import Image from 'next/image';

import * as styles from './index.styles';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapperStyles}>
      <div className={styles.animateImgWrapperStyles}>
        <Image src="/logo.png" alt="logo" fill />
      </div>
      <p className={styles.loadingTextStyles}>Genius is thinking...</p>
    </div>
  );
};
