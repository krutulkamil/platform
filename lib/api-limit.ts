import { auth } from '@clerk/nextjs';
import type { UserApiLimit } from '@prisma/client';

import { prisma } from '@/lib/prisma';
import { MAX_FREE_COUNTS } from '@/utils/constants';

export const increaseApiLimit = async (): Promise<UserApiLimit | undefined> => {
  const { userId } = auth();

  if (!userId) return;

  const userApiLimit: UserApiLimit | null = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    }
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
    }
  });

  return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
};