/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilCallback, useRecoilState, useSetRecoilState } from 'recoil';
import { alertAtom, rewardCoinsAtom, signInAtom, signUpAtom } from '../store/atom/user';

type AuthData = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export function useAuth(route: 'signin' | 'signup', data: AuthData) {
  const navigate = useNavigate();
  const setAlert = useSetRecoilState(alertAtom);
  const [rewardCoins, setRewardCoins] = useRecoilState(rewardCoinsAtom);
  const [signIn, setSignIn] = useRecoilState(signInAtom);
  const [signUp, setSignUp] = useRecoilState(signUpAtom);

  const handleAuth = useRecoilCallback(({ set }) => async () => {
    try {
      const response = await axios.post(
        `https://coiny.onrender.com/api/v1/user/${route}`,
        data
      );

      const token = response.data.token;
      localStorage.setItem('token', response.data.token);

       const userInfo = await axios.get("https://coiny.onrender.com/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

       // ✅ Set reward coins
      if (userInfo.data?.rewardCoins !== undefined) {
        setRewardCoins(userInfo.data.rewardCoins);
      }



      setAlert({
        display: true,
        color: 'green',
        message: response.data.message,
      });

      setTimeout(() => {
        setAlert({ display: false, color: '', message: '' });
        navigate('/dashboard');
      }, 1000);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'Something went wrong during authentication.';
      setAlert({
        display: true,
        color: 'red',
        message: errorMessage,
      });
    }

    // Reset sign-in and sign-up states
    setSignIn({ username: '', password: '' });
    setSignUp({ username: '', password: '', firstName: '', lastName: '' });
  });

  return handleAuth;
}
