import  { useEffect, useState } from 'react';
import axios from 'axios';


interface Transaction {
  senderFirstName: string;
  senderLastName: string;
  receiverFirstName: string;
  receiverLastName: string;
  amount: number;
}



export default function TransactionHistory() {
    const [data, setData] = useState<Transaction[]>([]);
  const [firstname, setFirstName] = useState<string>("");

    async function handleData() {
        const res = await axios.get("https://localhost:500/api/v1/account/history", {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        });
        setFirstName(res.data.user);
        setData(res.data.history);
    }

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">

            {/* Transaction History Main Content */}
            <main className="flex-grow container mx-auto px-6 py-12">
                <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
                    Transaction History
                </h2>

                {/* Transaction Table */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-4 p-4 bg-blue-600 text-white font-semibold">
                        <div className="col-span-1 text-center">No.</div>
                        <div className="col-span-4">Sender</div>
                        <div className="col-span-4">Receiver</div>
                        <div className="col-span-3 text-right">Amount</div>
                    </div>

                    {/* Transaction Rows */}
                    {data.length > 0 ? (
                        <div className="divide-y divide-blue-100">
                            {data.map((user, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-12 gap-4 p-4 hover:bg-blue-50 transition-colors"
                                >
                                    <div className="col-span-1 text-center text-blue-800">{i + 1}</div>
                                    <div className="col-span-4 text-blue-900">{user.senderFirstName} {user.senderLastName}</div>
                                    <div className="col-span-4 text-blue-900">{user.receiverFirstName} {user.receiverLastName}</div>
                                    <div className={`col-span-3 text-right font-semibold ${firstname === user.senderFirstName
                                        ? 'text-red-600'
                                        : 'text-green-600'
                                        }`}>
                                        {firstname === user.senderFirstName ? '-' : '+'}{user.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-blue-600">No transactions found</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}