'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { VideoIcon } from 'lucide-react';
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
  videoSchema,
  type TVideoSchema,
} from '@/app/(dashboard)/(routes)/video/schema';
import { useProModal } from '@/hooks/use-pro-modal';
import * as styles from '@/app/(dashboard)/layout.styles';

export default function VideoPage() {
  const [video, setVideo] = useState<string>();
  const router = useRouter();
  const { onOpen: onModalOpen } = useProModal();

  const form = useForm<TVideoSchema>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(videoSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TVideoSchema> = async (values) => {
    try {
      setVideo(undefined);

      const { data } = await axios.post<string[]>('/api/video', values);

      setVideo(data[0]);
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
        title="Video Generation"
        description="Turn your prompt into video."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className={styles.formWrapperStyles}>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.formStyles}
            >
              <Input<TVideoSchema>
                name="prompt"
                control={form.control}
                placeholder="Clown fish swimming around a coral reef."
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
          {!video && !isLoading && <Empty label="No video generated yet." />}
          {video && (
            <video controls className={styles.videoStyles}>
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
