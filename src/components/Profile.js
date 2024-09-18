import React, { useState } from 'react';
import './Profile.scss';
import Swal from 'sweetalert2';

const subjects = ['자료구조', 'Java 프로그래밍', '알고리즘', '웹 개발', '데이터베이스']; // Example subjects

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '권지후후',
    Id: 'yolohoo',
    studentId: '202111111',
    email: 'user@naver.com',
    joinDate: '2024-09-15',
    subjects: ['자료구조', '웹 개발'], // 이미 db에 저장된 과목들을 가져옴
  });

  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const unsubscribe = () =>{
Swal.fire({
  title: "정말 회원 탈퇴 하시겠습니까?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "yes"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "탈퇴되셨습니다.",
      icon: "success"
    });
  }
});
  }
  const logoutHandle = () => {
    Swal.fire({
      title: "로그아웃 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "로그아웃 되셨습니다.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>{formData.username}</h2>
          <p>사용자 소개글을 여기에 입력하세요</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-field">
          <label>아이디</label>
          <span>{formData.Id}</span>
        </div>
        <div className="profile-field">
          <label>학번</label>
          <span>{formData.studentId}</span>
        </div>
        <div className="profile-field">
          <label>이메일</label>
          <span>{formData.email}</span>
        </div>
        <div className="profile-field">
          <label>가입일</label>
          <span>{formData.joinDate}</span>
        </div>
        <div className="profile-field">
          <label>선택된 과목</label>
          
          <button type="button" className="subject-button2" onClick={() => setShowModal(true)}>
            과목 수정하기
          </button>
        </div>
        <div className="profile-field">
        <span>{formData.subjects.join(', ')}</span>
      
        </div>
        <div className="profile-field">
          <label>기타</label>
        </div>
        <div className="profile-field">
          <button type='button' className='others'>정보 동의 설정</button>
      
        </div>
        <div className="profile-field">
 
          <button type='button' className='others' onClick={unsubscribe}>회원 탈퇴</button>
    
        </div>
        <div className="profile-field">
      
          <button type='button' className='others'onClick={logoutHandle}>로그아웃</button>
        </div>
      </div>

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
                          className="check_input"
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

export default Profile;
