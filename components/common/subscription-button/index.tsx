'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Zap } from 'lucide-react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';

import * as styles from './index.styles';

interface IProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro = false }: IProps) => {
  const [loading, setLoading] = useState(false);

  const buttonCaption = isPro ? 'Manage Subscription' : 'Upgrade';
  const buttonVariant = isPro ? 'default' : 'premium';

  const handleClick = async () => {
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
    <Button onClick={handleClick} variant={buttonVariant} disabled={loading}>
      {buttonCaption}
      {!isPro && <Zap className={styles.buttonIconStyles} />}
    </Button>
  );
};
