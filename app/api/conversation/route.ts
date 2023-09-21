import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import { openai } from '@/lib/openai';
import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import type { ICompletionMessage } from '@/types/completionMessage';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages }: { messages: ICompletionMessage[] } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai) {
      return new NextResponse('OpenAI API key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse('Free trial limit exceeded', { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });

    await increaseApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
