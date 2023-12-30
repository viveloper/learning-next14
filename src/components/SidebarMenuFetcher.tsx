import { useMenu } from '../hooks/useMenu';

export function SidebarMenuFetcher({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { isLoading, error } = useMenu();

  if (error) {
    throw error;
  }

  if (isLoading) {
    return <div>Menu Loading...</div>;
  }

  return children;
}
