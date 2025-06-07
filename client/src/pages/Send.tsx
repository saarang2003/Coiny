
import { useSearchParams, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import { amountAtom } from '../store/atom/user';
import useTransfer from '../hooks/Transfer';
import { ChevronLeft, Receipt } from 'lucide-react';
import InputBox from '../component/InputBox';


export default function Send() {


    const [amount, setAmount] = useRecoilState(amountAtom);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
  const handleTransfer = useTransfer({ 
  amount: amount || 0, 
  id: id || "" 
});

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4'>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='absolute top-4 left-4'
            >
                <Link 
                    to="/dashboard" 
                    className='text-blue-600 p-2 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors'
                >
                    <ChevronLeft size={20} className='text-2xl' />
                </Link>
            </motion.div>

            <motion.section 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden'
            >
                <div className='p-8 space-y-6'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-3'>
                            <Receipt className='text-blue-500' />
                            Send Money
                        </h2>
                        <p className='text-blue-600 text-sm'>Transfer funds to {name}</p>
                    </div>

                    <div className='flex items-center justify-center gap-4 mb-6'>
                        <div className='h-16 w-16 bg-blue-600 flex justify-center items-center rounded-full shadow-lg'>
                            <span className='text-3xl text-white font-bold'>
  {name ? name[0].toUpperCase() : ''}
</span>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-blue-900'>{name}</h3>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <InputBox 
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder='Enter amount' 
                            label="Amount (in Rs)" 
                            value='number'
                            name='Amount'
                            type ="number"
                        />

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleTransfer}
                            className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out font-semibold'
                        >
                            Send Money
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}