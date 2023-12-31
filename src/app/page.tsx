import { RefreshButton } from '../components/RefreshButton';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function getData() {
  return new Promise<Todo[]>((resolve, reject) => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        next: { tags: ['todos'] },
      });
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        reject(Error('Failed to fetch data'));
      }

      const data: Todo[] = await res.json();
      resolve(data.filter((item) => item.userId === 1));
    }, 1000);
  });
}

export default async function Home() {
  const data = await getData();
  console.log(data[0]);

  return (
    <main className="p-2">
      <div className="mb-2">
        <RefreshButton />
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} className="mb-2">
            <pre className="bg-gray-100 p-4 rounded">
              {JSON.stringify(item, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </main>
  );
}
