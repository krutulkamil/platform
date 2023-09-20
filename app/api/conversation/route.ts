import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import type { IMessage } from '@/types/message';

const openai = !!process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : undefined;

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages }: { messages: IMessage[] } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai) {
      return new NextResponse('OpenAI API key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
