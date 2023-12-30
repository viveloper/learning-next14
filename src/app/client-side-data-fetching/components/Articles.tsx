import { useArticles } from '../hooks/useArticles';

export function Articles() {
  const { data, mutate } = useArticles();
  return (
    <div className="border p-4 mt-4">
      <div className="flex justify-between">
        <div className="text-2xl">Articles</div>
        <button
          className="border border-black rounded p-1"
          onClick={() => mutate()}
        >
          Refresh
        </button>
      </div>
      <ul className="mt-4">
        {data?.data.map((article) => (
          <li key={article.id} className="my-4">
            <div>{article.title}</div>
            <div>{article.description}</div>
            <div>{article.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
