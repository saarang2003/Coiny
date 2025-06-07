import { useRecoilValue } from 'recoil'

import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import { userDetailsSelector } from '../store/atom/user';

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
};

export default function Users() {
    const users = useRecoilValue(userDetailsSelector);
    const navigate = useNavigate();
    return (
        <>
            <Filter />
            {users.map((user : User) => (
                <div key={user._id} className="w-full py-4 border-b border-blue-100">
                    <div className="w-full lg:max-w-7xl mx-auto px-4 md:px-0 flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center gap-4">
                            <div className="h-10 w-10 bg-blue-600 text-white flex justify-center items-center rounded-full">
                                <span className="font-bold text-lg">{user.firstName[0].toUpperCase()}</span>
                            </div>
                            <div>
                                <span className="text-blue-900 font-bold">{user.firstName} {user.lastName}</span>
                            </div>
                        </div>
                        <div>
                            <button 
                                onClick={() => navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`)} 
                                className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-4 rounded-md transition"
                            >
                                Send Money
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}