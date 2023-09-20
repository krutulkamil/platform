import React from 'react';
import { MessageSquare } from 'lucide-react';

import { Heading } from '@/components/heading';

import * as styles from './page.styles';

export default function ConversationPage() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className={styles.formWrapperStyles}>WIP: form</div>
    </div>
  );
}
