import { sleep } from '@/utils/sleep';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = Number(searchParams.get('delay'));
  if (!isNaN(delay)) {
    console.log(delay);
    await sleep(delay);
  }
  return Response.json({
    name: 'Bob',
  });
}
