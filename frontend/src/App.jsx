import React, { useEffect, useState } from 'react';

import {Route , Routes, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';
import { useThemeStore } from "./store/useThemeStore";


import { useAuthStore } from './store/useAuthStore';
import { Toaster } from "react-hot-toast";

import { Loader} from "lucide-react"; 
const App = () => {
  const  { authUser , checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const {theme} = useThemeStore();

  console.log({ onlineUsers });

  useEffect(()=>{
  checkAuth()
}, [checkAuth])
console.log({authUser});


if (isCheckingAuth && !authUser)
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  );



  return (
    <div data-theme = {theme}>
      <NavBar/>
      

      <Routes>
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
      <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />

      </Routes>
      <Toaster/>
      
    </div>
  )
};

export default App;