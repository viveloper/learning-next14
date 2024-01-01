import { FormEvent, useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import { useArticlePost } from '../hooks/useArticlePost';

export function ArticleRegister() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { mutate } = useArticles();
  const { postArticle, isLoading } = useArticlePost();

  const validateRequest = () => {
    if (!title.trim() || !body.trim()) return false;
    return true;
  };

  const clearInput = () => {
    setTitle('');
    setBody('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequest()) return;
    await postArticle({ title, body });
    mutate();
    clearInput();
  };

  return (
    <div className="border p-4 mt-4">
      <div className="text-2xl">New Article</div>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            className="border border-gray-400 rounded p-1 outline-none w-full"
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            className="border border-gray-400 rounded p-1 outline-none w-full"
            rows={8}
            name="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <div className="text-right">
          <button
            className="bg-gray-200 rounded py-2 px-4 disabled:opacity-30"
            type="submit"
            disabled={isLoading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
