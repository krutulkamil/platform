import Replicate from 'replicate';

export const replicate = !!process.env.REPLICATE_API_TOKEN
  ? new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    })
  : undefined;
