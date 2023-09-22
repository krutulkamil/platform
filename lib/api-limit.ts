import { auth } from '@clerk/nextjs';
import type { UserApiLimit as TUserApiLimit } from '@prisma/client';

import { prisma } from '@/lib/prisma';
import { MAX_FREE_COUNTS } from '@/utils/constants';

export const increaseApiLimit = async (): Promise<
  TUserApiLimit | undefined
> => {
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

export const checkApiLimit = async (): Promise<boolean> => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
};

export const getApiLimitCount = async (): Promise<number> => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) return 0;

  return userApiLimit.count;
};
