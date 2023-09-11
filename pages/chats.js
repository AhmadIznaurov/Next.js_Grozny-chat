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

  if (!showChat) return <div />;

  return (
      <div className="background">
        <div className='shadow'>
          <ChatEngine
          height='calc(100ch - 200px'
          protectID='789eb031-fcfd-4aba-9be3-228b67575ee9'
          userName={username}
          userSecret={secret}
          />
        </div>

      </div>
    )
}
