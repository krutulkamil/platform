import React from 'react';
import { Settings } from 'lucide-react';

import { Heading } from '@/components/layout/heading';
import { checkSubscription } from '@/lib/subscription';
import { SubscriptionButton } from '@/components/common/subscription-button';
import * as styles from '@/app/(dashboard)/layout.styles';

export default async function SettingsPage() {
  const isPro = await checkSubscription();
  const currentPlanCaption = isPro
    ? 'You are currently on a Pro plan.'
    : 'You are currently on a Free plan.';

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className={styles.settingsPaddingWrapperStyles}>
        <div className={styles.settingsTextStyles}>{currentPlanCaption}</div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}
