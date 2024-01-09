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
  const errorType = searchParams.get('errorType');

  if (errorType === '40001') {
    return new Response(
      JSON.stringify({
        errorCode: 40001,
        errorMessage: 'Bad Request. [40001]',
      }),
      {
        status: 400,
        statusText: 'Bad Request.',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  if (errorType === '50001') {
    return new Response(
      JSON.stringify({
        errorCode: 50001,
        errorMessage: 'Inernal Server Error. [50001]',
      }),
      {
        status: 500,
        statusText: 'Internal Server Error.',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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
