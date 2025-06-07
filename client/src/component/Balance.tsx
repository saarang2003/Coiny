import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atom/user';


export default function Balance() {
    const { balance } = useRecoilValue(balanceAtom);
    const twoDecimal = parseFloat(balance).toFixed(2);
    
    return (
        <div className="w-full">
            <div className="w-full lg:max-w-7xl mx-auto px-4 md:px-0 py-8 text-blue-900">
                <div className="text-xl font-extrabold">
                    Your Balance 
                    <span className="text-blue-600 ml-2">
                        ${twoDecimal}
                    </span>
                </div>
            </div>
        </div>
    )
}