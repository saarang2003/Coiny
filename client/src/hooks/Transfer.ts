/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useRecoilCallback, useSetRecoilState } from "recoil";
import { alertAtom, amountAtom, rewardCoinsAtom } from "../store/atom/user";
import axios from "axios";

type Payment = {
  amount: number  ;
  id: string;
};

export default function useTransfer({ amount, id }: Payment) {
  const navigate = useNavigate();
  const setAmount = useSetRecoilState(amountAtom);
  const setAlert = useSetRecoilState(alertAtom);
  const setRewardCoins = useSetRecoilState(rewardCoinsAtom)

  const handleTransfer = useRecoilCallback(({ set }) => async () => {
    try {
      const response = await axios.post(
        "https://coiny.onrender.com/api/v1/account/transfer",
        {
          amount,
          to: id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.data.rewardCoins !== undefined) {
      setRewardCoins(response.data.rewardCoins); // ✅ update state
      alert('Transfer successful!');
    }

      setAlert({
        display: true,
        color: "green",
        message: response.data.message,
      });

      setTimeout(() => {
        navigate("/dashboard");
        setAmount(""); // or 0 depending on the expected default value
      }, 2000);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error  : any) {
      setAlert({
        display: true,
        color: "red",
        message: error?.response?.data?.message || "Transfer failed",
      });
    }
  });

  return handleTransfer;
}
