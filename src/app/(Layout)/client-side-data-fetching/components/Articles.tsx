import { useArticles } from '../hooks/useArticles';

export function Articles() {
  const { data } = useArticles();

  // error occured
  // const temp = { a: 1 };
  // temp.b.c = 1;

  return (
    <div className="border p-4 mt-4">
      <div className="flex justify-between">
        <div className="text-2xl">Articles</div>
      </div>
      <ul className="mt-4">
        {data?.data.map((article) => (
          <li key={article.id} className="my-4">
            <div className="text-lg">{article.title}</div>
            <div className="text-sm">{article.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
