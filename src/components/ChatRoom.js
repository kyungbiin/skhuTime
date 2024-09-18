import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoom.scss';

const initialMessages = [
  { id: 1, sender: '202111111', text: '안녕하세요!', time: '10:30 AM' },
  { id: 2, sender: '202111075', text: '저희 오늘 풀강하나요 ㅎㅎ..', time: '10:31 AM' },
  { id: 3, sender: '202111075', text: '안녕하세요!', time: '10:32 AM' },
  // Add more messages as needed
];

function ChatRoom() {
  const { chatName } = useParams();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        sender: 'me',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-room">
      <h2 className="chat-room-title"> > {chatName} </h2>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
            <div className="message-sender">{msg.sender}</div>
            <div className="message-text">{msg.text}</div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메세지를 입력하세요"
        />
        <button onClick={handleSendMessage}>send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
