import { SuggestionType } from '@/app/api/suggestion/route';
import { useState } from 'react';
import useSWR from 'swr';

export function WordSuggestion() {
  const [word, setWord] = useState('');
  const { data } = useSWR(
    `api/suggestion?word=${word}`,
    async (url) => {
      const response = await fetch(url);
      const data: SuggestionType[] = await response.json();
      return data;
    },
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      keepPreviousData: true,
    }
  );
  const isShowSuggestion = data && data.length > 0;
  return (
    <div>
      <h3 className="text-xl">Word Suggestion</h3>
      <input
        className="border border-gray-400 p-2 outline-none"
        type="text"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      {isShowSuggestion && (
        <ul className="border shadow p-2 mt-1">
          {data.map(({ id, word }) => (
            <li key={id}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
