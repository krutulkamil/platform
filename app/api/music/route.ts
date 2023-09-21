import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { replicate } from '@/lib/replicate';
import type { TMusicSchema } from '@/app/(dashboard)/(routes)/music/schema';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt }: TMusicSchema = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!replicate) {
      return new NextResponse('Replicate API key not configured', {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 });
    }

    const response = await replicate.run(
      'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
      {
        input: {
          prompt_a: prompt,
        },
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log('[MUSIC_ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
