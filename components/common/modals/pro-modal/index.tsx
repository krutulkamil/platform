'use client';

import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';

import * as styles from './index.styles';

export const ProModal = () => {
  const { isOpen, onClose } = useProModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitleStyles}>
            Upgrade to Genius
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
