import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

import * as styles from './index.styles';

export const BotAvatar = () => {
  return (
    <Avatar className={styles.botAvatarStyles}>
      <AvatarImage
        className={styles.botAvatarPaddingStyles}
        src="/logo.png"
        alt="logo"
      />
    </Avatar>
  );
};
