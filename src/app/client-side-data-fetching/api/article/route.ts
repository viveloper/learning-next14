import { sleep } from '@/utils/sleep';
import { type NextRequest } from 'next/server';

export type ArticleType = {
  id: number;
  title: string;
  body: string;
};

const ARTICLES: ArticleType[] = [
  {
    id: 1,
    title: 'title1',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    title: 'title2',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    title: 'title3',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    title: 'title4',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

let nextId = 5;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = Number(searchParams.get('delay'));
  if (!isNaN(delay)) {
    await sleep(delay);
  }
  return Response.json(ARTICLES);
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const delay = Number(searchParams.get('delay'));
  if (!isNaN(delay)) {
    await sleep(delay);
  }

  const req: Omit<ArticleType, 'id'> = await request.json();
  const newArticle: ArticleType = { ...req, id: nextId++ };
  ARTICLES.push(newArticle);
  return Response.json(newArticle);
}
