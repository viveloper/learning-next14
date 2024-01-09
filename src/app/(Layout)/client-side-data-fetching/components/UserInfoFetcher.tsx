import { useUserInfo } from '../hooks/useUserInfo';

export function UserInfoFetcher({ children }: { children?: React.ReactNode }) {
  const { isValidating, error } = useUserInfo();

  if (error) {
    throw error;
  }

  if (isValidating) {
    return <div>UserInfo Loading...</div>;
  }

  return children;
}
