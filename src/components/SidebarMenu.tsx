import { useMenu } from '@/hooks/useMenu';

export function SidebarMenu() {
  const { data } = useMenu();

  return (
    <ul>
      {data?.data.map((menu) => (
        <li key={menu.name} className="p-2">
          {menu.name}
        </li>
      ))}
    </ul>
  );
}
