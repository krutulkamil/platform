import React from 'react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

import * as styles from './index.styles';

interface IProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: IProps) => {
  return (
    <div className={styles.wrapperStyles}>
      <div className={cn(styles.iconContainerStyles, bgColor)}>
        <Icon className={cn(styles.iconDefaultStyles, iconColor)} />
      </div>
      <div>
        <h2 className={styles.headingTitleStyles}>{title}</h2>
        <p className={styles.headingDescriptionStyles}>{description}</p>
      </div>
    </div>
  );
};
