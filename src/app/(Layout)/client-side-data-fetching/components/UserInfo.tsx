import { useUserInfo } from '../hooks/useUserInfo';

export function UserInfo() {
  const { data } = useUserInfo();
  return (
    <div className="border p-4">
      <div className="flex justify-between">
        <div className="text-2xl">User Information</div>
      </div>
      <div className="flex items-center mt-4">
        <label>Name :</label>
        <div className="ml-2">{data?.data.name}</div>
      </div>
    </div>
  );
}
