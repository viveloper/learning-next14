'use client'; // Error components must be Client Components

import { isAxiosError } from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';

export function getErrorMessage(error: Error): string {
  if (isAxiosError(error)) {
    // API Error
    if (error.response) {
      // 2xx 외의 상태 코드로 응답
      // error.response.data : 협의된 에러 응답 데이터 스킴
      return error.response.data?.errorMessage || error.response.statusText;
    } else {
      // 네트워크 문제 등 서버의 응답을 받을 수 없는 경우
      return error.message;
    }
  } else {
    // 기타 런타임 에러
    return error.stack?.split('\n')[0] || error.message;
  }
}

// reference: https://nextjs.org/docs/app/building-your-application/routing/error-handling
export default function Error({ error }: { error: Error }) {
  const errorMessage: string = useMemo(() => getErrorMessage(error), [error]);

  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  useEffect(() => {
    // Show alert
    alert(errorMessage);
  }, [errorMessage]);

  return (
    <div>
      <h2 className="text-xl font-bold">
        An error occurred during loading the page.
      </h2>
      <p className="mt-2 text-red-500">{errorMessage}</p>
    </div>
  );
}
