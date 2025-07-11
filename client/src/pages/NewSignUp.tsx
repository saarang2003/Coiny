import * as React from "react";
import InputBox from "../component/InputBox";
import { useAuth } from "../hooks/auth";
import { useRecoilState } from "recoil";

import { signUpAtom } from "../store/atom/user";
import { Link } from "react-router-dom";

const SignUp1 = () => {
  const [data, setData] = useRecoilState(signUpAtom);
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSignUp = useAuth("signup", data);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden w-full rounded-xl">
      {/* Centered glass card */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl bg-gradient-to-r from-[#ffffff10] to-[#121212] backdrop-blur-sm  shadow-2xl p-8 flex flex-col items-center">
        {/* Logo */}
        <div>
           <svg
      viewBox="0 0 1024 1024"
       className="w-8 h-8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M732.1 399.3C534.6 356 696.5 82.1 425.9 104.8s-527.2 645.8-46.8 791.7 728-415 353-497.2z"
          fill="#A0FF99"
        ></path>
        <path
          d="M539.5 838.8c-1.4 0-2.9-0.3-4.2-1L330.1 730.3a8.95 8.95 0 0 1-3.8-12.1L529 331.1a8.92 8.92 0 0 1 8-4.8c1.4 0 2.9 0.3 4.2 1l205.2 107.5c4.4 2.3 6.1 7.7 3.8 12.1L547.4 834a8.92 8.92 0 0 1-7.9 4.8z"
          fill="#A0FF99"
        ></path>
        <path
          d="M537 335.3l205.2 107.5-202.7 387-205.2-107.4L537 335.3m0-17.9c-1.8 0-3.6 0.3-5.3 0.8-4.5 1.4-8.3 4.6-10.5 8.8L318.4 714.1a17.9 17.9 0 0 0 7.6 24.2l205.2 107.5c2.6 1.4 5.4 2 8.3 2 1.8 0 3.6-0.3 5.3-0.8 4.5-1.4 8.3-4.6 10.5-8.8L758.1 451a17.88 17.88 0 0 0-7.6-24.1L545.3 319.4c-2.5-1.3-5.4-2-8.3-2z"
          fill="#151B28"
        ></path>
        <path
          d="M538.4 835.5c-1 0-2-0.2-2.9-0.5l-254-87a8.98 8.98 0 0 1-5.6-11.4L440 257.4c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l254 87c2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8l-164 479.3c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.7-2.6 1-4 1z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M448.6 260.4l254 87-164.2 479.1-254-87 164.2-479.1m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3L267.5 733.7c-3.2 9.4 1.8 19.5 11.1 22.7l254 87c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3l164.1-479.2c3.2-9.4-1.8-19.5-11.1-22.7l-254-87c-1.9-0.6-3.9-0.9-5.8-0.9z"
          fill="#151B28"
        ></path>
        <path
          d="M448.6 323c-6.9 0-13.7-1.1-20.3-3.4-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8l17.4-50.8c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l50.8 17.4c2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8a62.83 62.83 0 0 1-59.3 42.4z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M448.6 260.4l50.8 17.4a53.82 53.82 0 0 1-50.8 36.3c-5.8 0-11.6-0.9-17.4-2.9l17.4-50.8m0-17.9c-7.4 0-14.4 4.7-16.9 12.1l-17.4 50.8c-1.5 4.5-1.2 9.4 0.9 13.7 2.1 4.3 5.8 7.5 10.3 9.1 7.5 2.6 15.3 3.9 23.2 3.9a71.6 71.6 0 0 0 67.7-48.4c1.5-4.5 1.2-9.4-0.9-13.7a18.1 18.1 0 0 0-10.3-9.1l-50.8-17.4c-2-0.7-3.9-1-5.8-1z"
          fill="#151B28"
        ></path>
        <path
          d="M685.1 407.1c-1 0-2-0.2-2.9-0.5a62.74 62.74 0 0 1-39-79.6c1.3-3.7 4.7-6.1 8.5-6.1 1 0 1.9 0.2 2.9 0.5l50.8 17.4c4.7 1.6 7.2 6.7 5.6 11.4L693.6 401c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.7-2.6 1-4 1z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M651.7 330l50.8 17.4-17.4 50.8a53.8 53.8 0 0 1-33.4-68.2m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3c-12.8 37.3 7.2 78.1 44.5 90.9 1.9 0.7 3.9 1 5.8 1 7.4 0 14.4-4.7 16.9-12.1l17.4-50.8c1.5-4.5 1.2-9.4-0.9-13.7a18.1 18.1 0 0 0-10.3-9.1L657.5 313c-1.8-0.6-3.8-0.9-5.8-0.9z"
          fill="#151B28"
        ></path>
        <path
          d="M335.3 765.9c-1 0-2-0.2-2.9-0.5L281.6 748c-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8l17.4-50.8c0.8-2.2 2.4-4.1 4.5-5.1a8.9 8.9 0 0 1 6.8-0.4 62.74 62.74 0 0 1 39 79.6c-0.8 2.2-2.4 4.1-4.5 5.1-1.3 0.5-2.7 0.8-4 0.8z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M301.9 688.8c28.1 9.6 43 40.1 33.4 68.2l-50.8-17.4 17.4-50.8m0-17.9c-2.7 0-5.4 0.6-7.9 1.8a18.1 18.1 0 0 0-9.1 10.3l-17.4 50.8c-3.2 9.4 1.8 19.5 11.1 22.7l50.8 17.4c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3 6.2-18.1 5-37.5-3.4-54.7-8.4-17.2-23-30-41.1-36.2-1.9-0.7-3.9-1-5.8-1z"
          fill="#151B28"
        ></path>
        <path
          d="M538.4 835.5c-1 0-1.9-0.2-2.9-0.5l-50.8-17.4c-2.2-0.8-4.1-2.4-5.1-4.5s-1.2-4.6-0.4-6.8a62.75 62.75 0 0 1 59.2-42.4c6.9 0 13.8 1.1 20.4 3.4 2.2 0.8 4.1 2.4 5.1 4.5s1.2 4.6 0.4 6.8l-17.4 50.8a9.01 9.01 0 0 1-8.5 6.1z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M538.4 772.8c5.8 0 11.7 0.9 17.5 2.9l-17.4 50.8-50.8-17.4a53.56 53.56 0 0 1 50.7-36.3m0-17.9v17.9-17.9a71.6 71.6 0 0 0-67.7 48.4c-3.2 9.4 1.8 19.5 11.1 22.7l50.8 17.4c1.9 0.6 3.8 1 5.8 1 2.7 0 5.4-0.6 7.9-1.8 4.3-2.1 7.5-5.8 9.1-10.3l17.4-50.8c3.2-9.4-1.8-19.5-11.1-22.7-7.6-2.6-15.4-3.9-23.3-3.9z"
          fill="#151B28"
        ></path>
        <path
          d="M493.6 692.4c-16.4 0-32.6-2.7-48.3-8.1-1-0.4-2.2-0.7-3.4-1.3a148.5 148.5 0 0 1-97.2-143c0-0.8 0.2-1.7 0.4-2.4l27.6-80.6c0.3-0.8 0.7-1.5 1.2-2.2 27.9-37.8 72.7-60.3 119.7-60.3 16.4 0 32.6 2.7 48.2 8.1 51.5 17.6 89.2 61.9 98.4 115.5 1.7 9.5 2.5 19.2 2.3 28.8 0 0.8-0.2 1.6-0.4 2.4l-27.6 80.6c-0.3 0.8-0.7 1.5-1.2 2.2-28 37.7-72.7 60.3-119.7 60.3z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M493.5 402.6c15.1 0 30.5 2.5 45.6 7.6 50.3 17.2 84.6 60.1 93 109.2 1.6 8.9 2.4 18.1 2.2 27.2l-27.6 80.6a141.19 141.19 0 0 1-113.1 57.1c-15.1 0-30.5-2.5-45.7-7.6-1-0.3-2-0.7-3-1.2-0.1 0-0.2-0.1-0.2-0.1-57.7-21.3-93.3-76.6-91.9-135.2l27.6-80.6c26.4-35.8 68.7-57 113.1-57m0-16.3c-49.6 0-96.8 23.8-126.3 63.6-1 1.3-1.8 2.8-2.3 4.4l-27.6 80.6c-0.5 1.6-0.8 3.2-0.9 4.9a156.78 156.78 0 0 0 102.3 150.7l3.8 1.5c16.5 5.7 33.6 8.5 50.9 8.5 49.6 0 96.7-23.8 126.2-63.6 1-1.3 1.8-2.8 2.3-4.4l27.6-80.6c0.5-1.6 0.8-3.2 0.9-4.9 0.3-10.1-0.6-20.4-2.4-30.5a156.69 156.69 0 0 0-103.8-121.7c-16.3-5.6-33.4-8.5-50.7-8.5z"
          fill="#151B28"
        ></path>
        <path
          d="M634.3 546.6l-27.6 80.6c-35.5 48-99.2 69.8-158.8 49.4-1-0.3-2-0.7-3-1.2-0.1 0-0.2-0.1-0.2-0.1-43.1-31.7-62.9-88.9-44.6-142.2 22.5-65.7 94-100.7 159.6-78.3a125.1 125.1 0 0 1 72.5 64.4 140 140 0 0 1 2.1 27.4z"
          fill="#2AEFC8"
        ></path>
        <path
          d="M456.5 496.9c-11 5.4-18 10.7-22.3 23.3-4.8 14.1 1.3 26.5 14.5 31 34.1 11.7 45.7-54.8 94.4-38.1 21.3 7.3 31.1 25.7 26.7 47.7l22.3 7.6-4.2 12.2-22.1-7.6c-6.4 14-18.5 25.7-30.3 32l-8.6-11.7c11.4-6.4 22.1-15.5 26.9-29.6 5.9-17.3-0.5-29.3-15.1-34.3-38.1-13.1-50.7 53.1-94.9 37.9-19.7-6.7-29.4-24.9-25.7-44.9l-22.3-7.6 4.2-12.2 22.1 7.6c6.3-13.8 16.3-20.7 27.4-25.6l7 12.3z"
          fill=""
        ></path>
      </g>
    </svg>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Coiny
        </h2>
        {/* Form */}
        <div className="flex flex-col w-full gap-4">
          <div className="w-full flex flex-col gap-3">
            <InputBox
              onChange={handleData}
              value={data.firstName}
              placeholder="First Name"
              label="First Name"
              name="firstName"
            />
            <InputBox
              onChange={handleData}
              value={data.lastName}
              placeholder="Last Name"
              label="Last Name"
              name="lastName"
            />

            <InputBox
              onChange={handleData}
              value={data.username}
              placeholder="exmaple@gmail.com"
              label="Email"
              name="username"
              type="email"
            />

            <InputBox
              onChange={handleData}
              value={data.password}
              placeholder="Password"
              label="Password"
              name="password"
              type="password"
            />
          </div>
          <hr className="opacity-10" />
          <div>
            <button
              onClick={handleSignUp}
              className="w-full bg-white/10 text-white font-medium px-5 py-3 rounded-full shadow hover:bg-white/20 transition mb-3  text-sm"
            >
              Sign in
            </button>
            {/* Google Sign In */}
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#232526] to-[#2d2e30] rounded-full px-5 py-3 font-medium text-white shadow hover:brightness-110 transition mb-2 text-sm">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
            <div className="w-full text-center mt-2">
              <span className="text-xs text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="underline text-white/80 hover:text-white"
                >
                  Sign in!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* User count and avatars */}
      <div className="relative z-10 mt-12 flex flex-col items-center text-center">
        <p className="text-gray-400 text-sm mb-2">
          Join <span className="font-medium text-white">thousands</span> of
          developers who are already using HextaUI.
        </p>
        <div className="flex">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-8 h-8 rounded-full border-2 border-[#181824] object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-8 h-8 rounded-full border-2 border-[#181824] object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt="user"
            className="w-8 h-8 rounded-full border-2 border-[#181824] object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="user"
            className="w-8 h-8 rounded-full border-2 border-[#181824] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { SignUp1 };
