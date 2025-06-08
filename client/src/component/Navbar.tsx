/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRecoilValue } from 'recoil'

import { useNavigate, Link } from 'react-router-dom';
import { balanceAtom } from '../store/atom/user';
import { useRef, useState } from 'react';
import  QRCode  from 'react-qr-code';

type Indi = {
    userId: string;
    onClose: () => void;
};

function QrModal({ userId, onClose }: Indi) {
  const qrRef = useRef(null);

  const downloadQR = () => {
    const svg = qrRef.current;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = pngFile;
      link.download = "qr-code.png";
      link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white text-black p-20 rounded-2xl text-center">
        <h2 className='mb-3 font-bold'>Your QR Code</h2>
        <div style={{ background: "white", padding: "16px" }}>
          <QRCode ref={qrRef} value={userId} size={256} />
        </div>
        <div className='flex justify-center items-center gap-x-2'>
        <button className='bg-black p-3 rounded-xl cursor-pointer text-white mt-4' onClick={onClose}>
          Close
        </button>
        <button className='bg-black p-3 rounded-xl cursor-pointer text-white mt-4' onClick={downloadQR}>
          Get Image
        </button>
        </div>
      </div>
    </div>
  );
}




export default function Navbar() {

     const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
    const { user } = useRecoilValue(balanceAtom);
    console.log("user" , user);
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
                       className="hover:text-[#A0FF99] hover:bg-black text-black bg-white border-1 border-white cursor-pointer shadow-2xl rounded-md px-3 py-1 transition"
                    >
                        Pay By Qr
                    </button>
                    <button 
                    onClick={openModal}
                       className="hover:text-[#A0FF99] hover:bg-black text-black bg-white border-1 border-white cursor-pointer shadow-2xl rounded-md px-3 py-1 transition"
                    >
                        Receive By Qr
                    </button>
                    {showModal && <QrModal userId={user._id} onClose={closeModal} />}

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