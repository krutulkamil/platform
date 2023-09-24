'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ImageIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import toast from 'react-hot-toast';

import { Heading } from '@/components/layout/heading';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/common/forms/controlled-inputs/input';
import { Select } from '@/components/common/forms/controlled-inputs/select';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/common/empty';
import { Loader } from '@/components/common/loader';
import { ImageCard } from '@/components/common/cards/image-card';
import {
  imageSchema,
  type TImageSchema,
} from '@/app/(dashboard)/(routes)/image/schema';
import {
  amountOptions,
  resolutionOptions,
} from '@/app/(dashboard)/(routes)/image/constants';
import { useProModal } from '@/hooks/use-pro-modal';
import type { IImageData } from '@/types/imageData';
import * as styles from '@/app/(dashboard)/layout.styles';

export default function ImagePage() {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const { onOpen: onModalOpen } = useProModal();

  const form = useForm<TImageSchema>({
    defaultValues: {
      prompt: '',
      amount: '1',
      resolution: '512x512',
    },
    resolver: zodResolver(imageSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TImageSchema> = async (values) => {
    try {
      setImages([]);

      const { data } = await axios.post<IImageData[]>('/api/image', {
        ...values,
      });
      const urls = data.map((image) => image.url);

      setImages(urls);
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
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className={styles.formWrapperStyles}>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.formStyles}
            >
              <Input<TImageSchema>
                name="prompt"
                control={form.control}
                placeholder="A picture of a horse in Swiss alps"
                isLoading={isLoading}
                isSmall
              />
              <Select<TImageSchema>
                name="amount"
                control={form.control}
                isLoading={isLoading}
                options={amountOptions}
              />
              <Select<TImageSchema>
                name="resolution"
                control={form.control}
                isLoading={isLoading}
                options={resolutionOptions}
              />
              <Button className={styles.formButtonStyles} disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className={styles.messagesWrapperStyles}>
          {isLoading && (
            <div className={styles.loaderPaddingStyles}>
              <Loader />
            </div>
          )}
          {!images.length && !isLoading && (
            <Empty label="No images generated." />
          )}
          <div className={styles.imagesGridWrapperStyles}>
            {images.map((src) => (
              <ImageCard key={src} src={src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
