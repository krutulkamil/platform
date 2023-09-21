'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/utils/cn';
import type { TTool } from '@/config/tools';

import * as styles from './index.styles';

interface IProps {
  tool: TTool;
}

export const ToolCard = ({ tool }: IProps) => {
  const router = useRouter();

  return (
    <Card
      key={tool.href}
      className={styles.pageCardWrapperStyles}
      onClick={() => router.push(tool.href)}
    >
      <div className={styles.pageCardGridStyles}>
        <div className={cn(styles.pageCardStyles, tool.bgColor)}>
          <tool.icon className={cn(styles.pageCardIconStyles, tool.color)} />
        </div>
        <div className={styles.pageContentLabelStyles}>{tool.label}</div>
      </div>
      <ArrowRight className={styles.arrowRightStyles} />
    </Card>
  );
};
