import React from 'react';
import BoardList from './BoardList'; 
import ChatList from './ChatList';
import './Main.scss';
import Skhu from "../img/skhu.png";

const Main = () => {
  return (
    <div className="main-container">
      <div className='main-title'>
      <img src={Skhu} alt='Skhu' height='200px' width='200px' /> 
        <h1>우리만의 커뮤니티</h1>
        <h1 id='skhuTimeLogo'>skhuTime</h1>
        <p>회대생활의 다양한 정보와 이야기를 <br></br>
            같은 과목끼리 자유롭게 나눠보세요. 
        </p>
        
      </div>


      <div className="list-container">
        <div className="board-list-section">
          <h3 className='h3List'>게시판</h3>
         
          <BoardList hideSearch={true} />
        </div>
        <div className="chat-list-section">
          <h3 className='h3List'>채팅 목록</h3>
          <ChatList />
        </div>
      </div>
    </div>
  );
};

export default Main;
