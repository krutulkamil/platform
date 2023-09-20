import React from 'react';
import { useUser } from '@clerk/nextjs';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import * as styles from './index.styles';

export const UserAvatar = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <Avatar className={styles.userAvatarStyles}>
      <AvatarImage src={user.imageUrl} alt="avatar" />
      <AvatarFallback>
        {user.firstName?.charAt(0) ?? 'A'}
        {user.lastName?.charAt(0) ?? 'A'}
      </AvatarFallback>
    </Avatar>
  );
};
