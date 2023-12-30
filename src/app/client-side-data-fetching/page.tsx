'use client';

import { UserInfo } from './components/UserInfo';
import { Articles } from './components/Articles';
import { AtriclesFetcher } from './components/ArticlesFetcher';
import { UserInfoFetcher } from './components/UserInfoFetcher';
import { PageDataFetcher } from './components/PageDataFetcher';

export default function Page() {
  return (
    <PageDataFetcher>
      <UserInfoFetcher>
        <UserInfo />
      </UserInfoFetcher>
      <AtriclesFetcher>
        <Articles />
      </AtriclesFetcher>
    </PageDataFetcher>
  );
}
