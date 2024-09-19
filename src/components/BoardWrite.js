import React, { useState } from 'react';
import './BoardWrite.scss';

const BordWrite = () => {
  const [title, setTitle] = useState(''); // 제목을 위한 상태값 관리
  const [content, setContent] = useState(''); // 내용을 위한 상태값 관리
  const [agreed, setAgreed] = useState(false); //규칙 동의 체크박스를 위한 상태값 관리

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 사용자가 규칙에 동의하지 않는 경우
    if(!agreed){
      alert('커뮤니티 이용규칙에 동의해야 합니다.'); // 경고 메시지
      return; // 동의하지 않았으면 제출하지 않음.
    }

    // 기본 확인 창을 사용
    const confirmed = window.confirm('Skhu Time에 게시글을 업로드 하시나요?'); //확인 팝업
    if (confirmed) {

      /*만약 팝업 창 없앨 거면 위 두 줄만 없애 삼 밑에 있는 console.log 두개는 있어야 되는 거임.*/
      // 확인 팝업에서 "예"를 선택한 경우
      console.log('제목: ', title);
      console.log('내용: ', content);
    // 실제 제출 로직을 여기에 추가
    
    }
  };

  return (
    <div className="board-write-container">
      <h1 className="board-write-title">게시글 작성</h1>
      <form className="board-write-form" onSubmit={handleSubmit}>

        {/* 제목 입력 필드 */}
        <div className="form-group">
          <label htmlFor="title">제목:</label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/*내용 입력 필드 */}
        <div className="form-group">
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        {/*커뮤니티 이용 규칙세션 */}
        <div className="board-write-rules">
          <h2>Skhu Time 커뮤니티 이용규칙</h2>
          <p>Skhu Time은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.</p>
          <p>아래는 이 게시판에 해당하는 핵심 내용에 대한 요약이며, 게시물 작성 전 <strong>커뮤니티 이용규칙 전문</strong>을 반드시 확인해주세요.</p>
          <ul>
            <li>타인에게 불쾌감을 주는 게시물은 작성할 수 없습니다.</li>
            <li>비속어, 욕설, 비방은 금지됩니다.</li>
            <li>허위 사실 유포는 엄격히 금지됩니다.</li>
            <li>개인정보 유출 시 법적 처벌을 받을 수 있습니다.</li>
          </ul>
        </div>

        {/* 커뮤니티 규칙 동의 체크박스 */}
        <div className="form-group agree-checkbox">
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            커뮤니티 이용규칙을 모두 읽고 동의합니다.
          </label>
        </div>


        {/*작성 완료 버튼 */}
        <button type="submit" className="submit-button">작성 완료</button>
      </form>
    </div>
  );
};

export default BordWrite;
