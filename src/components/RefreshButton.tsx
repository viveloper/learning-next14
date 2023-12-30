'use client';

import refresh from '../app/actions';

export function RefreshButton() {
  return (
    <button
      className="bg-slate-200 p-2 rounded"
      onClick={() => {
        refresh();
      }}
    >
      Refresh
    </button>
  );
}
