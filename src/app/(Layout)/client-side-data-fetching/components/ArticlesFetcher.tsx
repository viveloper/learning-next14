import { useArticles } from '../hooks/useArticles';

export function AtriclesFetcher({ children }: { children?: React.ReactNode }) {
  const { isValidating, error } = useArticles();

  if (error) {
    throw error;
  }

  if (isValidating) {
    return <div>Articles Loading...</div>;
  }

  return children;
}
