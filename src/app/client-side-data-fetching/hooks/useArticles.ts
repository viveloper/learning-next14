import axios from 'axios';
import useSWR from 'swr';
import { ArticleType } from '../api/article/route';

export function useArticles() {
  const result = useSWR(
    '/client-side-data-fetching/api/article?delay=1500',
    (url) => axios.get<ArticleType[]>(url)
  );

  return result;
}
