'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('aaaa5391-0f2a-457f-924e-25bca086e018');
  }, []);

  return null;
};
