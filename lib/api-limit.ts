import { auth } from '@clerk/nextjs';

import { prisma } from '@/lib/prisma';
import { MAX_FREE_COUNTS } from '@/utils/constants';

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return prisma.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }

  return prisma.userApiLimit.update({
    where: {
      userId,
    },
    data: {
      count: userApiLimit.count + 1,
    },
  });
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
};
