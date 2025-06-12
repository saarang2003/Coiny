/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// hooks/Transfer.ts
import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import { alertAtom, amountAtom, rewardCoinsAtom } from "../store/atom/user";
import axios from "axios";

type Payment = {
  amount: number;
  id: string;
  pin: string;
};

export default function useTransfer({ amount, id, pin }: Payment) {
  const navigate = useNavigate();
  const setAmount = useSetRecoilState(amountAtom);
  const setAlert = useSetRecoilState(alertAtom);
  const setRewardCoins = useSetRecoilState(rewardCoinsAtom);

  const handleTransfer = useRecoilCallback(({ set }) => async () => {
    if (!pin) {
      setAlert({
        display: true,
        color: "red",
        message: "PIN is required",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://coiny.onrender.com/api/v1/account/transfer",
        {
          amount,
          to: id,
          pin,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.rewardCoins !== undefined) {
        setRewardCoins(response.data.rewardCoins);
      }

      setAlert({
        display: true,
        color: "green",
        message: response.data.message,
      });

      setTimeout(() => {
        navigate("/dashboard");
        setAmount("");
      }, 2000);
    } catch (error: any) {
      setAlert({
        display: true,
        color: "red",
        message: error?.response?.data?.message || "Transfer failed",
      });
    }
  });

  return handleTransfer;
}