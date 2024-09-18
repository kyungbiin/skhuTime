import React from 'react';
import './Board.scss';
const Board = () => {
  return (
    <div className='board'>
      <div >
      <img
        src='https://via.placeholder.com/600x400' // 여기에 이미지 URL을 넣어주세요
        alt='Post'
      />
      <div className='detail_content'>
        <div id='id'>jihoo_0529</div>
        <div id='time'>2024.09.07 11:03</div>
        <div id='content'>셀피의 원조 비비안 마이어는 사후에 유명해진
          거리의 사진가로 알려져 있다.
        </div>
        <hr />
        <div id='heart'>좋아요 8개</div>
        <div id='reply'>댓글 1개</div>
      </div>
      </div>
      <div className='board'>
      <img
        src='https://via.placeholder.com/600x400' // 여기에 이미지 URL을 넣어주세요
        alt='Post'
      />
      <div className='detail_content'>
        <div id='id'>jihoo_0529</div>
        <div id='time'>2024.09.07 11:03</div>
        <div id='content'>셀피의 원조 비비안 마이어는 사후에 유명해진
          거리의 사진가로 알려져 있다.
        </div>
        <hr />
        <div id='heart'>좋아요 8개</div>
        <div id='reply'>댓글 1개</div>
      </div>
      </div>
    </div>
    
  );
};

export default Board;
