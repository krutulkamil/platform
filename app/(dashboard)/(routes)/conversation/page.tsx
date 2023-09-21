'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
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
  conversationSchema,
  type TConversationSchema,
} from '@/app/(dashboard)/(routes)/conversation/schema';
import type { ICompletionMessage } from '@/types/completionMessage';

import * as styles from './page.styles';

export default function ConversationPage() {
  const [messages, setMessages] = useState<ICompletionMessage[]>([]);

  const router = useRouter();

  const form = useForm<TConversationSchema>({
    defaultValues: {
      prompt: '',
    },
    resolver: zodResolver(conversationSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<TConversationSchema> = async (values) => {
    try {
      const userMessage: ICompletionMessage = {
        role: 'user',
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const { data } = await axios.post<ICompletionMessage>(
        '/api/conversation',
        {
          messages: newMessages,
        }
      );

      setMessages((current) => [...current, userMessage, data]);

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
              <FormField<TConversationSchema>
                name="prompt"
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
          {isLoading && (
            <div className={styles.loaderWrapperStyles}>
              <Loader />
            </div>
          )}
          {!messages.length && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className={styles.messagesGridStyles}>
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  styles.messageContentBaseStyles,
                  message.role === 'user'
                    ? styles.userMessageStyles
                    : styles.assistantMessageStyles
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p className={styles.messageContentTextStyles}>
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
