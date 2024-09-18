import React, { useState } from 'react';
import './BoardList.scss';
import { CiSearch } from "react-icons/ci";
import noSearch from '../img/noSearch.png';

const posts = [
  { id: 1, title: '저 좀 도와주세요 ㅜㅜ', content: ' 자바 때문에 미치겠어요 ㅜㅜ', author: '익명1', date: '2024-09-12' },
  { id: 2, title: '두 번째 게시물', content: ' 두 번째 게시물', author: '사용자2', date: '2024-09-11' },
  { id: 3, title: '세 번째 게시물', content: '세 번째 게시물', author: '사용자3', date: '2024-09-10' },
];

const BoardList = ({ hideSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  //검색 핸들링 
  const handleSearch = () => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="board-list-container">
      {/* 검색창을 조건부로 렌더링 */}
      {!hideSearch && (
        <div className="search-container">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button"><CiSearch /></button>
        </div>
      )}

      <div className="board-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="board-item">
              <h3 className="board-title">{post.title}</h3>
              <p className="board-content">{post.content}</p>
              <div className="board-footer">
                <span className="board-author">{post.author}</span>
                <span className="board-date">{post.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div id='noSearchDiv'>
            <img src={noSearch} alt='noSearch' height='100px' width='100px' />
            <p id='boardMassage'>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardList;
