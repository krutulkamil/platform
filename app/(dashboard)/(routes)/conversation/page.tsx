'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { Heading } from '@/components/heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  formSchema,
  type TFormSchema,
} from '@/app/(dashboard)/(routes)/conversation/constants';
import { Button } from '@/components/ui/button';

import * as styles from './page.styles';

interface IMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ConversationPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const router = useRouter();

  const form = useForm<TFormSchema>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TFormSchema> = async (values: TFormSchema) => {
    try {
      const userMessage: IMessage = { role: 'user', content: values.prompt };
      const newMessages = [...messages, userMessage];

      const { data } = await axios.post('/api/conversation', {
        messages: newMessages,
      });

      setMessages((current) => [...current, data]);
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
              <Button className={styles.formButtonStyles} disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className={styles.messagesWrapperStyles}>
          <div className={styles.messagesGridStyles}>
            {messages.map((message) => (
              <div key={message.content}>{message.content}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
