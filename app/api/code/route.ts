import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import type { ICompletionMessage } from '@/types/completionMessage';

const openai = !!process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : undefined;

const instructionMessage: ICompletionMessage = {
  role: 'system',
  content: 'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.'
};

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

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]: ', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
