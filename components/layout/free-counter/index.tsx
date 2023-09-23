'use client';

import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MAX_FREE_COUNTS } from '@/config/constants';
import { useProModal } from '@/hooks/use-pro-modal';

import * as styles from './index.styles';

interface IProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const FreeCounter = ({ apiLimitCount = 0, isPro = false }: IProps) => {
  const [mounted, setMounted] = useState(false);
  const { onOpen } = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isPro) return null;

  return (
    <div className={styles.paddingWrapperStyles}>
      <Card className={styles.cardWrapperStyles}>
        <CardContent className={styles.cardContentStyles}>
          <div className={styles.textStyles}>
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className={styles.progressBarStyles}
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            className={styles.buttonStyles}
            variant="premium"
            onClick={onOpen}
          >
            Upgrade
            <Zap className={styles.buttonIconStyles} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
