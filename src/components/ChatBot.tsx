'use strict';
import React from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<
    { user: boolean; text: string }[]
  >([]);
  const [input, setInput] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isPending) return;

    setMessages((prev) => [...prev, { user: true, text: input }]);
    setIsPending((prev) => !prev);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const { reply } = await response.json();
        setMessages((prev) => [...prev, { user: false, text: reply }]);
      } else
        setMessages((prev) => [
          ...prev,
          { user: false, text: 'Something went wrong. Please try again.' },
        ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          user: false,
          text: 'Unable to fetch a response. Check your connection.',
        },
      ]);
    }

    setInput('');
    setIsPending((prev) => !prev);
  };

  return (
    <>
      <button
        className='fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div className='fixed bottom-16 right-6 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col z-50'>
          <header className='bg-blue-600 text-white p-4 rounded-t-lg'>
            <h2 className='text-lg font-semibold'>Chat with Me!</h2>
            <button
              className='absolute top-4 right-4 text-white'
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </header>

          <div className='flex-1 p-4 overflow-y-auto'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.user
                    ? 'text-right text-blue-700'
                    : 'text-left text-gray-800'
                } mb-2`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    msg.user ? 'bg-blue-100' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <footer className='p-4 border-t flex items-center'>
            <input
              className='flex-1 text-gray-800 border border-gray-300 rounded-l-lg p-2 focus:outline-none'
              placeholder='Type a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={isPending}
            />
            <button
              className='bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700'
              onClick={handleSendMessage}
              disabled={isPending}
            >
              Send
            </button>
          </footer>
        </div>
      )}
    </>
  );
};

export default Chatbot;
