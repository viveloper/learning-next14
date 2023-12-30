'use client';

import axios from 'axios';
import useSWR from 'swr';

export function Sidebar() {
  // const { data, isLoading } = useSWR('/api/menu?delay=1000', (url) =>
  //   axios.get(url)
  // );
  return (
    <aside className="fixed top-[56px] w-64 h-[calc(100vh-56px)] bg-gray-100 shadow">
      sidebar
    </aside>
  );
}
