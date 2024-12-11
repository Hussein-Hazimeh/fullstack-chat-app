import React, { useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import Sidebar from '../components/Sidebar';
import NoChatSeleted  from '../components/NoChatSeleted';
import Chatcontainer from '../components/Chatcontainer';
const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSeleted /> : <Chatcontainer />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;