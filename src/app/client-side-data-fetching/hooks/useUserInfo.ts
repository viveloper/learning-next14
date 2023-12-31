import { UserType } from '@/app/api/user/route';
import axios from 'axios';
import useSWR from 'swr';

export function useUserInfo() {
  const result = useSWR('/api/user', (url) => axios.get<UserType>(url), {
    revalidateOnFocus: false,
  });
  return result;
}
