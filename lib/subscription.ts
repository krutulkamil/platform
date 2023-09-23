import { auth } from '@clerk/nextjs';

import { prisma } from '@/lib/prisma';
import { DAY_IN_MS } from '@/config/constants';

export const checkSubscription = async (): Promise<boolean> => {
  const { userId } = auth();

  if (!userId) return false;

  const userSubscription = await prisma.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) return false;

  return Boolean(
    userSubscription.stripePriceId &&
      userSubscription.stripeCurrentPeriodEnd &&
      userSubscription.stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now()
  );
};
