'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '@/components/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  formSchema,
  type TFormSchema,
} from '@/app/(dashboard)/(routes)/conversation/constants';

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
    console.log(values);
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
                  <FormItem>
                    <FormControl className={styles.formControlsStyles}>
                      // TODO: create input component
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
