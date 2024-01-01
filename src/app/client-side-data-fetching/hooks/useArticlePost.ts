import axios, { AxiosError, isAxiosError } from 'axios';
import { useState } from 'react';
import { ArticleType } from '../api/article/route';
import { getErrorMessage } from '../error';

export function useArticlePost() {
  const [isLoading, setIsLoading] = useState(false);

  const postArticle = async (article: Omit<ArticleType, 'id'>) => {
    try {
      setIsLoading(true);
      const res = await axios.post<ArticleType>(
        '/client-side-data-fetching/api/article?delay=500',
        article
      );
      setIsLoading(false);
      return res.data;
    } catch (error) {
      setIsLoading(false);
      alert(getErrorMessage(error as Error));
    }
  };

  return {
    postArticle,
    isLoading,
  };
}
