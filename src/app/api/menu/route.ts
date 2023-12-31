import { sleep } from '@/utils/sleep';
import { type NextRequest } from 'next/server';

export type MenuType = {
  link: string;
  name: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = Number(searchParams.get('delay'));
  if (!isNaN(delay)) {
    await sleep(delay);
  }
  return Response.json([
    {
      link: '/abc/def',
      name: '메뉴1',
    },
    {
      link: '/abc/def',
      name: '메뉴2',
    },
    {
      link: '/abc/def',
      name: '메뉴3',
    },
    {
      link: '/abc/def',
      name: '메뉴4',
    },
  ]);
}
