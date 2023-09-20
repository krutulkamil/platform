'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '@/components/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  formSchema,
  type TFormSchema,
} from '@/app/(dashboard)/(routes)/conversation/constants';
import { Button } from '@/components/ui/button';

import * as styles from './page.styles';

export default function ConversationPage() {
  const form = useForm<TFormSchema>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TFormSchema> = async (values: TFormSchema) => {
    // TODO: call API
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className={styles.formWrapperStyles}>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.formStyles}
            >
              <FormField<TFormSchema>
                name="prompt"
                control={form.control}
                render={({ field }) => (
                  <FormItem className={styles.formItemStyles}>
                    <FormControl className={styles.formControlsStyles}>
                      <Input
                        className={styles.formInputStyles}
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className={styles.formButtonStyles}>Generate</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
