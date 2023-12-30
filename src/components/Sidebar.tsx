'use client';

import { SidebarMenuFetcher } from './SidebarMenuFetcher';
import { SidebarMenu } from './SidebarMenu';

export function Sidebar() {
  return (
    <aside className="fixed top-[56px] w-64 h-[calc(100vh-56px)] bg-gray-100 shadow">
      <SidebarMenuFetcher>
        <SidebarMenu />
      </SidebarMenuFetcher>
    </aside>
  );
}
