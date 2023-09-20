import React from 'react';
import Image from 'next/image';

import * as styles from './index.styles';

interface IProps {
  label: string;
}

export const Empty = ({ label }: IProps) => {
  return (
    <div className={styles.emptyWrapperStyles}>
      <div className={styles.imageWrapperStyles}>
        <Image src="/empty.png" alt="Empty!" fill />
      </div>
      <p className={styles.labelWrapperStyles}>{label}</p>
    </div>
  );
};
