'use client';

import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useProModal } from '@/hooks/use-pro-modal';
import { tools } from '@/config/tools';
import { cn } from '@/utils/cn';

import * as styles from './index.styles';

export const ProModal = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, onClose } = useProModal();

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<{ url: string }>('/api/stripe');

      window.location.href = data.url;
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitleStyles}>
            <div className={styles.dialogFlexWrapperStyles}>
              Upgrade to Genius
              <Badge className={styles.badgeStyles} variant="premium">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className={styles.dialogDescriptionStyles}>
            {tools.map((tool) => (
              <Card key={tool.label} className={styles.toolCardWrapperStyles}>
                <div className={styles.toolCardGridWrapperStyles}>
                  <div
                    className={cn(styles.toolCardContentStyles, tool.bgColor)}
                  >
                    <tool.icon
                      className={cn(styles.toolCardIconStyles, tool.color)}
                    />
                  </div>
                  <div className={styles.toolCardLabelStyles}>{tool.label}</div>
                </div>
                <Check className={styles.toolCardCheckStyles} />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            size="lg"
            variant="premium"
            className={styles.fullWidthStyles}
            onClick={handleSubscribe}
            disabled={loading}
          >
            Upgrade <Zap className={styles.upgradeIconStyles} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
