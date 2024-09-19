import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Side from './components/Side';
import BoardList from './components/BoardList';
import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';
import Join from './components/Join';
import Main from './components/Main';
import './App.scss';
import Profile from './components/Profile';

function AppContent() {
  const location = useLocation();

  
  const shouldShowSidebar = location.pathname !== '/login' && location.pathname !== '/join';


  return (
    <div className='wrapper'>
      {shouldShowSidebar && <Side />}
      <div className='content_wrapper'>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/boardList" element={ <BoardList /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/chat" element={ <ChatList /> } />
          <Route path="/chatRoom/:chatName" element={ <ChatRoom /> } />
          <Route path="/join" element={ <Join /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/boardDetail/:id" element={ <BoardDetail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
