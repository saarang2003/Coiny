
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { signUpAtom } from '../store/atom/user';
import type { ChangeEvent } from 'react';
import { useAuth } from '../hooks/auth';
import InputBox from '../component/InputBox';

export default function Signup() {
    const [data, setData] = useRecoilState(signUpAtom);
    const handleData = (e : ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSignUp = useAuth("signup",  data );

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
            <motion.section 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className='w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden'
            >
                <div className='p-8 space-y-6'>
                    <div className='text-center'>
                        <motion.h2 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='text-4xl font-bold text-blue-900 mb-2'
                        >
                            Create Account
                        </motion.h2>
                        <p className='text-blue-600 text-sm'>Enter your information to get started</p>
                    </div>

                    <div className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <InputBox
                                    onChange={handleData} 
                                    value={data.firstName} 
                                    placeholder='First Name' 
                                    label="First Name" 
                                    name="firstName" 
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <InputBox 
                                    onChange={handleData} 
                                    value={data.lastName} 
                                    placeholder='Last Name' 
                                    label="Last Name" 
                                    name="lastName" 
                                />
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <InputBox 
                                onChange={handleData} 
                                value={data.username} 
                                placeholder='shashank@gmail.com' 
                                label="Email" 
                                name="username" 
                                type="email"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <InputBox 
                                onChange={handleData} 
                                value={data.password} 
                                placeholder='Password' 
                                label="Password" 
                                name="password" 
                                type="password"
                            />
                        </motion.div>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSignUp} 
                        className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out font-semibold'
                    >
                        Sign Up
                    </motion.button>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='text-center text-blue-600'
                    >
                        Already have an account? {' '}
                        <Link 
                            to="/signin" 
                            className='text-blue-800 hover:text-blue-900 transition-colors'
                        >
                            Login
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}