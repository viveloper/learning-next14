'use client';

import { useState, useTransition } from 'react';
import { WordSuggestion } from './WordSuggestion';
import { HeavyRenderingComponent } from './HeavyRenderingComponent';

export default function Page() {
  const [isShow, setIsShow] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <button
            className="outline rounded py-1 px-2"
            onClick={() => {
              startTransition(() => {
                setIsShow(true);
              });
            }}
          >
            Mount HeavyRenderingComponent
          </button>
          {isPending && <div>Pending...</div>}
          {isShow && <HeavyRenderingComponent />}
        </div>
        <WordSuggestion />
      </div>
    </div>
  );
}
