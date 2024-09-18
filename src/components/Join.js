import React, { useState } from 'react';
import './Join.scss';

const subjects = ['자료구조', 'Java 프로그래밍', '알고리즘', '웹 개발', '데이터베이스']; // 예시 과목 리스트

const Join = () => {
  const [userId, setUserId] = useState(''); //아이디
  const [userPass, setUserPass] = useState(''); //비밀번호
  const [userPassCheck, setUserPassCheck] = useState(''); //비밀번호 확인
  const [userEmail, setUserEmail] = useState(''); //이메일

  const [isUserId, setIsUserId] = useState(false);
  const [isUserPass, setIsUserPass] = useState(false);
  const [isUserPassCheck, setIsUserPassCheck] = useState(false);
  const [isUserEmail, setIsUserEmail] = useState(false); //이메일 확인

  // 오류 메세지 상태 저장
  const [userIdMessage, setUserIdMessage] = useState('');
  const [UserNameMessage, setUserNameMessage] = useState('');
  const [userPassMessage, setUserPassMessage] = useState('');
  const [userPassCheckMessage, setUserPassCheckMessage] = useState('');
  const [userEmailMessage, setUserEmailMessage] = useState('');


  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    subjects: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSubject = (subject) => {
    setFormData((prevData) => {
      const subjects = prevData.subjects.includes(subject)
        ? prevData.subjects.filter((subj) => subj !== subject)
        : [...prevData.subjects, subject];
      return { ...prevData, subjects };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 데이터:', formData);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="join-container">
      <form className="join-form" onSubmit={handleSubmit}>
        <p id='joinTitle'>skhuTime</p>
        <p id='subTitle'>회원가입하기</p>
        <div className="form-group">
          
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='이름'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.username}
            onChange={handleChange}
            placeholder='학번'
            required
          />
        </div>
        <div className='joogbokid'>
        <p className={`message ${isUserId ? 'blue-message' : 'red-message'}`}>
          {userIdMessage}
        </p>
      </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='이메일'
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder='비밀번호'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='비밀번호 확인'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            name="email"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder='이메일'
            required
          />
        </div>
        <div className="form-group">
       
          
          <button type="button" className="subject-button" onClick={() => setShowModal(true)}>
            과목 선택하기
          </button>
          <div className="selected-subjects">
            <h3>선택된 과목</h3> 
            {formData.subjects.join(', ')}
          </div>
        </div>
        <button type="submit" className="join-button">가입하기</button>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>과목 선택</h2>
            <p>현재 듣고 있는 과목을 검색해주세요!</p>
            <input
              type="text"
              className="search-input"
              placeholder="과목 검색..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <ul className="subject-list">
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map((subject) => (
                    <li key={subject}>
                     <label>
  <input
    type="checkbox"
    className='check_input'
    checked={formData.subjects.includes(subject)}
    onChange={() => toggleSubject(subject)}
  />
  {subject}
</label>

                    </li>
                  ))
                ) : (
                  <li>검색 결과가 없습니다.</li>
                )}
              </ul>
            )}
            <button className="close-modal" onClick={() => setShowModal(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
