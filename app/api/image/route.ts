import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { openai } from '@/lib/openai';
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';
import type { TImageSchema } from '@/app/(dashboard)/(routes)/image/schema';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const {
      prompt,
      amount = '1',
      resolution = '512x512',
    }: TImageSchema = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai) {
      return new NextResponse('OpenAI API key not configured', { status: 500 });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    if (!amount) {
      return new NextResponse('Amount is required', { status: 400 });
    }

    if (!resolution) {
      return new NextResponse('Resolution is required', { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse('Free trial limit exceeded', { status: 403 });
    }

    const response = await openai.images.generate({
      prompt,
      size: resolution,
      n: Number(amount),
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
