'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ImageIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { Heading } from '@/components/layout/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Empty } from '@/components/common/empty';
import { Loader } from '@/components/common/loader';
import { UserAvatar } from '@/components/common/user-avatar';
import { BotAvatar } from '@/components/common/bot-avatar';
import { cn } from '@/lib/utils';
import {
  imageSchema,
  type TImageSchema,
} from '@/app/(dashboard)/(routes)/image/schema';

import * as styles from './page.styles';

export default function ImagePage() {
  const [images, setImages] = useState<string[]>([]);

  const router = useRouter();

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

      const { data } = await axios.post('/api/image', { values });
      console.log(data);

      const urls = data.map((image: { url: string }) => image.url);

      setImages(urls);
      form.reset();
    } catch (error: unknown) {
      console.log(error);
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
              <FormField<TImageSchema>
                name="prompt"
                render={({ field }) => (
                  <FormItem className={styles.formItemStyles}>
                    <FormControl className={styles.formControlsStyles}>
                      <Input
                        className={styles.formInputStyles}
                        disabled={isLoading}
                        placeholder="A picture of a horse in Swiss alps"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              // WIP
              <FormField<TImageSchema>
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className={styles.formItemAmountStyles}>
                    //TODO: add select component
                  </FormItem>
                )}
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
          <div>Images will be rendered here.</div>
        </div>
      </div>
    </div>
  );
}
