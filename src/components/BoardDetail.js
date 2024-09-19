import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import './BoardDetail.scss';

const posts = [
  {
    id: 1,
    title: '저 좀 도와주세요 ㅜㅜ',
    content: ' 자바 때문에 미치겠어요 ㅜㅜ',
    author: '익명1',
    date: '2024-09-12',
  },
  {
    id: 2,
    title: '두 번째 게시물',
    content: ' 두 번째 게시물',
    author: '사용자2',
    date: '2024-09-11',
  },
  {
    id: 3,
    title: '세 번째 게시물',
    content: '세 번째 게시물',
    author: '사용자3',
    date: '2024-09-10',
  },
];

const BoardDetail = () => {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기
  const post = posts.find((post) => post.id === Number(id)); // 해당 id의 게시물 찾기

  //댓글 목록과 새 댓글 상태 관리
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

   // 좋아요 상태 관리
   const [likes, setLikes] = useState(0);
   const [hasLiked, setHasLiked] = useState(false);

  // 컴포넌트가 처음 렌더링될 때 localStorage에서 댓글 데이터 불러오기
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${id}`);
    const storedLikes = localStorage.getItem(`likes_${id}`);
    const userHasLiked = localStorage.getItem(`hasLiked_${id}`);

    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }

    if (storedLikes) {
      setLikes(Number(storedLikes));
    }

    if (userHasLiked) {
      setHasLiked(true);
    }
  }, [id]);

   // 댓글 작성 처리 함수
   const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return; // 빈 댓글은 추가하지 않음

    const commentData = {
      id: comments.length + 1, // 고유 ID
      text: newComment,
      date: new Date().toISOString().slice(0, 10), // 현재 날짜
    };

    const updatedComments = [...comments, commentData];
    setComments(updatedComments); // 새 댓글 추가
    setNewComment(''); // 댓글 입력란 초기화

    // localStorage에 댓글 저장
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
  };

  // 좋아요 처리 함수 (한 번만 누를 수 있게 제한)
  const handleLike = () => {
    if (!hasLiked) {
      const updatedLikes = likes + 1;
      setLikes(updatedLikes);
      setHasLiked(true);

      // localStorage에 좋아요 수 및 사용자의 좋아요 상태 저장
      localStorage.setItem(`likes_${id}`, updatedLikes);
      localStorage.setItem(`hasLiked_${id}`, true);
    }
  };

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="board-detail">
      <h1>{post.title}</h1>
      <div className="post-info">
        <p><strong>작성자:</strong> {post.author}</p>
        <p><strong>작성일:</strong> {post.date}</p>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* 좋아요 섹션 */}
      <div className="like-section">
        <button onClick={handleLike} className="like-button" disabled={hasLiked}>
          좋아요
        </button>
        <span>{likes}</span> {/* 좋아요 수만 표시 */}
      </div>

      {/*댓글 목록*/}
      <div className="comments-section">
        <h3>댓글</h3>
        {comments.length === 0 ? (
          <p>댓글이 없습니다.</p>
        ) : (
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.text}</p>
                <span className="comment-date">{comment.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/*댓글 작성 폼*/}
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="댓글을 입력하세요..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">댓글 작성</button>
      </form>

      <Link to="/board" className="back-link">목록으로 돌아가기</Link>
    </div>
  );
};

export default BoardDetail;