import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atom/user';
import { useEffect } from 'react';


export default function Balance() {
    const { balance } = useRecoilValue(balanceAtom);
    const twoDecimal = parseFloat(balance).toFixed(2);


    

    useEffect(() =>{
       console.log("Balance updated");
    } , [balance])


    
    return (
        <div className="w-full">
            <div className="w-full lg:max-w-7xl mx-auto px-4 md:px-0 py-8 text-white">
                <div className="text-xl font-extrabold">
                    Your Balance 
                    <span className="text-[#A0FF99] ml-2">
                        ${twoDecimal}
                    </span>
                </div>
            </div>
        </div>
    )
}