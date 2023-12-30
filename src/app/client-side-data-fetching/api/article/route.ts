import { sleep } from '@/utils/sleep';
import { type NextRequest } from 'next/server';

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  body: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = Number(searchParams.get('delay'));
  if (!isNaN(delay)) {
    await sleep(delay);
  }
  return Response.json([
    {
      id: 1,
      title: 'title1',
      description: 'description1',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'title2',
      description: 'description2',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'title4',
      description: 'description3',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      title: 'title1',
      description: 'description4',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]);
}
