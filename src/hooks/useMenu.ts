import { MenuType } from '@/app/api/menu/route';
import axios from 'axios';
import useSWR from 'swr';

export function useMenu() {
  const result = useSWR(
    '/api/menu?delay=500',
    (url) => axios.get<MenuType[]>(url),
    { revalidateOnFocus: false }
  );

  return result;
}
