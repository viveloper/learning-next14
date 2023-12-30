import { UserType } from '@/app/api/user/route';
import axios from 'axios';
import useSWR from 'swr';

export function useUserInfo() {
  const result = useSWR('/api/user?delay=1000', (url) =>
    axios.get<UserType>(url)
  );
  return result;
}
