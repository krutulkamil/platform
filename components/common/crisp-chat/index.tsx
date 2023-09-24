'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';
import { useAuth } from '@clerk/nextjs';

export const CrispChat = () => {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    isSignedIn && Crisp.configure('aaaa5391-0f2a-457f-924e-25bca086e018');
  }, [isSignedIn]);

  return null;
};
