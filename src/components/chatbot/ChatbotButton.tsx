import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
      
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
}

// import React, { useState } from 'react';
// import axios from 'axios';

// const ChatWindow = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: 'user', content: input };
//     setMessages([...messages, userMessage]);
//     setInput('');

//     try {
//       const res = await axios.post('http://localhost:5000/chat', {
//         message: input,
//       });

//       const botMessage = { role: 'bot', content: res.data.response };
//       setMessages(prev => [...prev, botMessage]);
//     } catch (err) {
//       const errorMessage = { role: 'bot', content: 'Error getting response from server.' };
//       setMessages(prev => [...prev, errorMessage]);
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded-md w-full max-w-md mx-auto">
//       <div className="h-64 overflow-y-auto mb-2 border p-2 rounded">
//         {messages.map((msg, index) => (
//           <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//             <div
//               className={`inline-block p-2 rounded ${
//                 msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
//               }`}
//               dangerouslySetInnerHTML={{ __html: msg.content }}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           type="text"
//           className="flex-1 border rounded-l px-3 py-1"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === 'Enter' && sendMessage()}
//         />
//         <button className="bg-blue-500 text-white px-4 py-1 rounded-r" onClick={sendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
