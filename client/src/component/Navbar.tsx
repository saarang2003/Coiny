/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRecoilValue } from 'recoil'

import { useNavigate, Link } from 'react-router-dom';
import { balanceAtom } from '../store/atom/user';

export default function Navbar() {
    const { user } = useRecoilValue(balanceAtom);
    const navigate = useNavigate();
    return (
        <nav className="w-full bg-black text-[#A0FF99] shadow-md border-b border-blue-100">
            <div className="container mx-auto px-6 py-4  flex flex-row justify-between items-center">
                <div>
                    <Link to="/dashboard" className="text-2xl font-bold ">
                        Coiny
                    </Link>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <button 
                        onClick={() => navigate("history")} 
                        className="text-[#A0FF99] hover:bg-blue-50 hover:text-black rounded-md px-3 py-1 transition"
                    >
                        Account
                    </button>
                    <button 
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/signin")
                        }} 
                        className="hover:text-[#A0FF99] hover:bg-black text-black bg-white border-1 border-white cursor-pointer shadow-2xl rounded-md px-3 py-1 transition"
                    >
                        Log Out
                    </button>
                   
                </div>
            </div>
        </nav>
    )
}