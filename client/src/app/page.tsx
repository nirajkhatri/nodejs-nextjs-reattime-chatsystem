'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const chatMessageElement = document.getElementById('chat-message');
    const paraNode = document.createElement('p');
    paraNode.innerText = message;
    chatMessageElement?.appendChild(paraNode);
    setMessage('');
  };

  return (
    <main>
      <div className="flex">
        <div className="min-h-screen w-3/12 border-2 border-blue-400">
          <h1>User info</h1>
          <div>
            <p>user 1</p>
            <p>user 2</p>
            <p>user 3</p>
            <p>user 4</p>
          </div>
        </div>
        <div className="flex w-9/12">
          <div className="border-2 border-red-400 flex-1">
            <h1 className="border-2 border-red-600">Chat side</h1>
            <div id="chat-message"></div>
          </div>
          <div className="flex w-9/12 justify-center gap-4 bg-orange-400 p-4 absolute bottom-0 border-2 border-green-600">
            <input
              placeholder="Enter Message Here..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="border-2 border-black py-5 w-9/12 p-4"
              type="text"
            />
            <button
              onClick={handleSendMessage}
              className="px-10 py-5 bg-black text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
