'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Music } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';

import { Heading } from '@/components/layout/heading';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/common/forms/controlled-inputs/input';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/common/empty';
import { Loader } from '@/components/common/loader';
import {
  musicSchema,
  type TMusicSchema,
} from '@/app/(dashboard)/(routes)/music/schema';
import { useProModal } from '@/hooks/use-pro-modal';
import type { IMusicResponse } from '@/types/musicResponse';
import * as styles from '@/app/(dashboard)/layout.styles';

export default function MusicPage() {
  const [music, setMusic] = useState<string>();
  const router = useRouter();
  const { onOpen: onModalOpen } = useProModal();

  const form = useForm<TMusicSchema>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(musicSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TMusicSchema> = async (values) => {
    try {
      setMusic(undefined);

      const { data } = await axios.post<IMusicResponse>('/api/music', values);

      setMusic(data.audio);
      form.reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        onModalOpen();
      } else {
        toast.error('Something went wrong.');
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className={styles.formWrapperStyles}>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.formStyles}
            >
              <Input<TMusicSchema>
                name="prompt"
                control={form.control}
                placeholder="Piano solo in C major"
                isLoading={isLoading}
              />
              <Button className={styles.formButtonStyles} disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className={styles.messagesWrapperStyles}>
          {isLoading && (
            <div className={styles.loaderWrapperStyles}>
              <Loader />
            </div>
          )}
          {!music && !isLoading && <Empty label="No music generated yet." />}
          {music && (
            <audio controls className={styles.audioStyles}>
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
}
