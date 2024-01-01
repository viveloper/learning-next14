'use client';

import { UserInfo } from './components/UserInfo';
import { Articles } from './components/Articles';
import { PageDataFetcher } from './components/PageDataFetcher';
import { ArticleRegister } from './components/ArticleRegister';
import { ApiErrorBoundary } from './components/ApiErrorBoundary';

export default function Page() {
  return (
    // <ApiErrorBoundary>
    <PageDataFetcher>
      <UserInfo />
      <Articles />
      <ArticleRegister />
    </PageDataFetcher>
    // </ApiErrorBoundary>
  );
}
