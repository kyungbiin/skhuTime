import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.scss';
const Login = () => { // 컴포넌트 함수는 대문자로 시작
    const [userId, setUserId] = useState('');
    const [userPass, setUserPass] = useState('');

    return (
        <div className='login'>
           <Link to={'/'} id='LinkLogin'>
            <div id='title'>
                skhuTime
            </div>
            </Link>
            <input
                type='text'
                id='id'
                name='id'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder='아이디를 입력해주세요'
            />
      
            <input
                type='password' // 비밀번호 필드는 보통 type을 'password'로 설정합니다.
                id='password'
                name='password'
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
                placeholder='비밀번호를 입력해주세요.'
            />
            <button
                type='submit'
                className='loginbtn'
            >
                로그인
            </button>
            <Link to="/join" id='toJoin'>
            <div>회원가입하기</div>
            </Link>
        </div>
    );
}

export default Login;
