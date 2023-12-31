'use client';

import { UserInfo } from './components/UserInfo';
import { Articles } from './components/Articles';
import { PageDataFetcher } from './components/PageDataFetcher';
import { ArticleRegister } from './components/ArticleRegister';

export default function Page() {
  return (
    <PageDataFetcher>
      <UserInfo />
      <Articles />
      <ArticleRegister />
    </PageDataFetcher>
  );
}
