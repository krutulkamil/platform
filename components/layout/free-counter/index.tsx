'use client';

import React, { useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { MAX_FREE_COUNTS } from '@/utils/constants';

import * as styles from './index.styles';

interface IProps {
  apiLimitCount: number;
}

export const FreeCounter = ({ apiLimitCount = 0 }: IProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.paddingWrapperStyles}>
      <Card className={styles.cardWrapperStyles}>
        <CardContent className={styles.cardContentStyles}>
          <div className={styles.textStyles}>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
