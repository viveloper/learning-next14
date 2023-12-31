import axios from 'axios';
import { useState } from 'react';
import { ArticleType } from '../api/article/route';

export function useArticlePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ArticleType>();
  const [error, setError] = useState<unknown>();

  return {
    postArticle: async (article: Omit<ArticleType, 'id'>) => {
      try {
        setIsLoading(true);
        const res = await axios.post<ArticleType>(
          '/client-side-data-fetching/api/article',
          article
        );
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    },
    isLoading,
    data,
    error,
  };
}
