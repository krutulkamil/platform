'use client';

import React, { useState, useEffect } from 'react';

import { ProModal } from '@/components/common/modals/pro-modal';

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ProModal />;
};
