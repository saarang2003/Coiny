// Send.tsx
import { useSearchParams, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { amountAtom } from "../store/atom/user";
import useTransfer from "../hooks/Transfer";
import { ChevronLeft, Receipt } from "lucide-react";
import InputBox from "../component/InputBox";
import { useState } from "react";
import Modal from "../component/Modal";

export default function Send() {
  const [amount, setAmount] = useRecoilState(amountAtom);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState("");
  const handleTransfer = useTransfer({ amount: Number(amount), id: id || "", pin });

  const onPinVerified = (pinValue: string) => {
    setPin(pinValue);
    handleTransfer(); // Trigger transfer after PIN is set
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 left-4"
      >
        <Link
          to="/dashboard"
          className="text-[#A0FF99] px-2 rounded-full bg-white shadow-md transition-colors"
        >
          <ChevronLeft size={20} className="text-2xl" />
        </Link>
      </motion.div>

      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-black rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8 border-b-6 border-r-6 border-l-1 border-t-1 border-[#464646] rounded-2xl space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#A0FF99] mb-2 flex items-center justify-center gap-3">
              <Receipt className="text-white" />
              Send Money
            </h2>
            <p className="text-white text-sm">Transfer funds to {name}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-16 w-16 bg-white flex justify-center items-center rounded-full shadow-lg">
              <span className="text-3xl text-black font-bold">
                {name ? name[0].toUpperCase() : ""}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#A0FF99]">{name}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <InputBox
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              label="Amount (in Rs)"
              value={amount}
              name="Amount"
              type="number"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPinModal(true)}
              className="w-full bg-black border-b-4 border-r-4 border-l-1 border-t-1 border-[#5b5b5b] text-white py-3 rounded-lg hover:bg-black transition-colors duration-300 ease-in-out font-semibold"
            >
              Send Money
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Modal open={showPinModal} onClose={() => setShowPinModal(false)} onVerified={onPinVerified} />
    </div>
  );
}