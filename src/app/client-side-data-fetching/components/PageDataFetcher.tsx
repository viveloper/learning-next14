import { useUserInfo } from '../hooks/useUserInfo';
import { useArticles } from '../hooks/useArticles';

export function PageDataFetcher({ children }: { children?: React.ReactNode }) {
  const { isLoading: isUserInfoLoading, error: isUserInfoError } =
    useUserInfo();
  const { isLoading: isArticlesLoading, error: isArticlesError } =
    useArticles();

  if (isUserInfoError) {
    throw isUserInfoError;
  }

  if (isArticlesError) {
    throw isArticlesError;
  }

  if (isUserInfoLoading || isArticlesLoading) {
    return <div>Articles Page Loading...</div>;
  }

  return children;
}
