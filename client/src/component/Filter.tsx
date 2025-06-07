import { useSetRecoilState } from 'recoil'
import { usersDetailsAtom } from '../store/atom/user';

export default function Filter() {
    const setUser = useSetRecoilState(usersDetailsAtom);
    return (
        <div className="pb-6">
            <div className="w-full lg:max-w-7xl mx-auto px-4 md:px-0 flex flex-col space-y-4">
                <div className="text-xl font-bold text-blue-900">Users</div>
                <div>
                    <input 
                        type="text" 
                        name="search" 
                        onChange={(e) => setUser(e.target.value)} 
                        placeholder="Search users..." 
                        className="w-full p-3 px-4 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-blue-900" 
                    />
                </div>
            </div>
        </div>
    )
}