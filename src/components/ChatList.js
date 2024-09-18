import React, { useState } from 'react';
import './ChatList.scss';
import { Link } from 'react-router-dom';

const initialChats = [
  {
    id: 1,
    name: '자료구조',
    lastMessage: '저희 저번 과제 혹시 하신 분?',
    time: '10:30 AM',
    unreadCount: 2,
  },
  {
    id: 2,
    name: 'Java 프로그래밍',
    lastMessage: '오늘 휴강 공지 떴던데요?',
    time: '9:15 AM',
    unreadCount: 1,
  },
  {
    id: 3,
    name: '웹 개발',
    lastMessage: '새로운 프로젝트가 있어요.',
    time: '8:00 AM',
    unreadCount: 0,
  },
];

function ChatList() {
  const [chats, setChats] = useState(initialChats);

  const markAsRead = (id) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id ? { ...chat, unreadCount: 0 } : chat
      )
    );
  };

  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <Link
        to={`/chatRoom/${chat.name}`}
          className="no-underline"
          key={chat.id}
          onClick={() => markAsRead(chat.id)}
        >
          <div className="chat-item">
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-last-message">{chat.lastMessage}</div>
            </div>
            <div className="chat-meta">
              <div className="chat-time">{chat.time}</div>
              {chat.unreadCount > 0 && (
                <div className="chat-unread">{chat.unreadCount}</div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatList;
