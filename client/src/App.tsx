/* eslint-disable @typescript-eslint/no-unused-vars */
import React ,{ Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import { alertAtom } from "./store/atom/user";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./component/Alert";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Loading from "./component/Loading";

import TransactionHistory from "./pages/TransactionHistory";
import Send from "./pages/Send";
import { 
  SignIn1 } from "./pages/NewSignIn";
import { SignUp1 } from "./pages/NewSignUp";


const Users = React.lazy(() => import('./component/User'))

export default function App() {
  const [alert, setAlert] = useRecoilState(alertAtom);

  useEffect(() => {
    let timeoutId;
    if (alert.display) {
      setTimeout(() => {
        setAlert({ ...alert, display: false })
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [alert, setAlert])

  
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<Suspense fallback={<Loading />}><Users /> </Suspense>} />
          <Route path='history' element={<TransactionHistory />} />
        </Route>
        <Route path='signup' element={<SignUp1 />} />
        <Route path='signin' element={<SignIn1 />} />
        <Route path='sendmoney' element={<Send />} />
      </Routes>
    </BrowserRouter>
  )
}