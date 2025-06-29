import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { userDetailsSelector } from '../store/atom/user';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
};

export default function Users() {
  const navigate = useNavigate();
  const usersLoadable = useRecoilValueLoadable(userDetailsSelector);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (usersLoadable.state === 'hasValue') {
      setUsers(usersLoadable.contents);
    }
  }, [usersLoadable]);

  return (
    <>
      <Filter />
      {users.map((user) => (
        <div key={user._id} className="w-full py-4 border-b border-blue-100">
          <div className="w-full lg:max-w-7xl mx-auto px-4 md:px-0 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-4">
              <div className="h-10 w-10 bg-white text-black flex justify-center items-center rounded-full">
                <span className="font-bold text-lg">{user.firstName[0].toUpperCase()}</span>
              </div>
              <div>
                <span className="text-[#A0FF99] font-bold">{user.firstName} {user.lastName}</span>
              </div>
            </div>
            <div>
              <button 
                onClick={() => navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`)} 
                className="bg-white text-black  cursor-pointer py-2 px-4 rounded-md transition"
              >
                Send Money
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}