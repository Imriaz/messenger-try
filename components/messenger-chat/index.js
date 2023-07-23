"use client";
import { FacebookProvider, CustomChat } from "react-facebook";
import React from "react";

const MessengerChat = () => {
  return (
    <div>
      <h1>Messenger Chat Components</h1>
      <FacebookProvider appId="238792998887533" chatSupport>
        <CustomChat pageId="100443455067967" minimized={false} />
      </FacebookProvider>
    </div>
  );
};

export default MessengerChat;
