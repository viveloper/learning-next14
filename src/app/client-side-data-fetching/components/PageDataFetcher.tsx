import { useUserInfo } from '../hooks/useUserInfo';
import { useArticles } from '../hooks/useArticles';

export function PageDataFetcher({ children }: { children?: React.ReactNode }) {
  const { isLoading: isUserInfoLoading, error: userInfoError } = useUserInfo();
  const { isLoading: isArticlesLoading, error: articlesError } = useArticles();

  if (userInfoError) {
    throw userInfoError;
  }

  if (articlesError) {
    throw articlesError;
  }

  if (isUserInfoLoading || isArticlesLoading) {
    return <div>Articles Page Loading...</div>;
  }

  return children;
}
