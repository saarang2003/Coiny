/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState, type ChangeEvent } from "react";
import Navbar from "../component/Navbar";
import Balance from "../component/Balance";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const showCreatePin = location.pathname.includes("/dashboard/history");
  const [input, setInput] = useState("");
  const [showPin, setShowPin] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };


  const handleCreatePin = async () => {
  try {
    const res = await fetch("https://coiny.onrender.com/api/v1/account/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ pin: input }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("PIN set successfully!");
      setInput(""); // reset pin
    } else {
      alert(data.message || "Failed to set PIN");
    }
  } catch (error) {
  alert("Server error: " + error);
}
};



  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-6 space-y-6">
        {showCreatePin && (
          <Suspense
            fallback={
              <div className="h-10 bg-white animate-pulse rounded-lg"></div>
            }
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black text-white border border-[#A0FF99] shadow-lg rounded-lg p-4"
            >
              <div className="flex justify-between items-center flex-wrap gap-4">
                <Button
                 onClick={handleCreatePin}
                className="text-white hover:scale-105 border-2 border-[#A0FF99] bg-black text-base">
                  Create Pin
                </Button>
                <div className="flex items-center gap-2 w-[40%] ">
                  <Input
                    className="border-1 border-[#A0FF99] hover:border-[#A0FF99]"
                    type={showPin ? "text" : "password"} // 👈 toggle input type
                    placeholder="Enter Your Pin"
                    onChange={handleChange}
                    value={input}
                  />
                  <Button
                    variant="outline"
                    className="text-xs px-2 py-1"
                    onClick={() => setShowPin((prev) => !prev)}
                  >
                    {showPin ? "Hide" : "Show"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </Suspense>
        )}



        <Suspense
          fallback={
            <div className="h-24 bg-white animate-pulse rounded-lg"></div>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white border border-[#A0FF99] shadow-lg rounded-lg p-4"
          >
            <Balance />
          </motion.div>
        </Suspense>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black text-white border border-[#A0FF99] shadow-lg p-4 rounded-2xl"
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
