'use server';

import { revalidateTag } from 'next/cache';

export default async function refresh() {
  console.log('refresh');
  revalidateTag('todos');
}
