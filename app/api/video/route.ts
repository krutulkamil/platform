import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { replicate } from '@/lib/replicate';
import type { TVideoSchema } from '@/app/(dashboard)/(routes)/video/schema';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt }: TVideoSchema = await req.json();

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
      'anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351',
      {
        input: {
          prompt,
        },
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log('[VIDEO_ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
