import { useUserInfo } from '../hooks/useUserInfo';

export function UserInfo() {
  const { data, mutate } = useUserInfo();
  return (
    <div className="border p-4">
      <div className="flex justify-between">
        <div className="text-2xl">User Information</div>
        <button
          className="border border-black rounded p-1"
          onClick={() => mutate()}
        >
          Refresh
        </button>
      </div>
      <div className="mt-4">{data?.data.name}</div>
    </div>
  );
}
