/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { atom, selector } from 'recoil';


// get balance and user details 
export const balanceAtom = atom({
    key: "balanceAtom",
    default: selector({
        key: "balanceSelector",
        get: async ({ get }) => {
            const token = localStorage.getItem("token");
            const response = await axios.get('https://coiny.onrender.com/api/v1/account/balance', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        }
    })
})


export const usersDetailsAtom = atom({
    key: "usersDetailsAtom",
    default: ''
})

export const userDetailsSelector = selector({
    key: "userDetailsSelector",
    get: async ({ get }) => {
        const user = get(usersDetailsAtom);
        const res = await axios.get(`https://coiny.onrender.com/api/v1/user/users?filter=${user}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        return res.data.users;
    }
});

// storing amount money user want to send
export const amountAtom = atom({
    key: "amountAtom",
    default: ""
});


// SignIn state to store username, password 
export const signInAtom = atom({
    key: "signInAtom",
    default: {
        username: "",
        password: ""
    }
})


// signUp state to store firstname, lastname, username, password 
export const signUpAtom = atom({
    key: "signUpAtom",
    default: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    }
})

// alert state
export const alertAtom = atom({
    key: "alertAtom",
    default: {
        display: false,
        message: "",
        color: ""
    }
});

// rewardCoins
export const rewardCoinsAtom = atom({
  key: 'rewardCoinsAtom',
  default: 0,
});