import React from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

import { Card, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import * as styles from './index.styles';

interface IProps {
  src: string;
}

export const ImageCard = ({ src }: IProps) => {
  return (
    <Card key={src} className={styles.imageCardStyles}>
      <div className={styles.imageWrapperStyles}>
        <Image src={src} alt="generated image" fill />
      </div>
      <CardFooter className={styles.imageCardFooterStyles}>
        <Button
          onClick={() => window.open(src, '_blank')}
          variant="secondary"
          className={styles.fullWidthStyles}
        >
          <Download className={styles.imageFooterIconStyles} />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};
