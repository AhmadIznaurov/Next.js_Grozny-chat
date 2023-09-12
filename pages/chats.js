import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/context'
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';


const ChatEngine = dynamic(() =>
   import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


export default function Chats() {
  const {username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof  document !== null) {
      setShowChat(true)
    }
  });
  useEffect(() => {
     if (username.length === 0 || secret.length === 0) router.push("/").then(r => r)
  });

  if (!showChat) return <div />;

  return (
      <div className="background">
        <div className='shadow'>
          <ChatEngine
          height="calc(100vh - 200px"
          projectID='8a44fbf7-a9e4-4fec-a5a8-c3abb5be1fff'
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    )
}
