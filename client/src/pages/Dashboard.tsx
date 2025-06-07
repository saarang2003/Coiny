/* eslint-disable react-hooks/exhaustive-deps */

import { Outlet, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Suspense, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Balance from '../component/Balance';


export default function Dashboard() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-12 space-y-6">
                <Suspense fallback={<div className="h-24 bg-white animate-pulse rounded-lg"></div>}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black text-white border-b-4 border-r-4 border-l-1 border-t-1 border-[#A0FF99] shadow-lg rounded-lg p-6"
                    >
                        <Balance />
                    </motion.div>
                </Suspense>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-black text-white border-b-4 border-r-4 border-l-1 border-t-1 border-[#A0FF99] shadow-lg  p-6 rounded-2xl overflow-hidden"
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    )
}