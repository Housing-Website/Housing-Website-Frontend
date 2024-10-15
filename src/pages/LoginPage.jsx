import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./styles/LoginPage.css";

function LoginPage({ setIsLoggedIn }) { 
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      navigate('/방문기록');
    }
  }, [setIsLoggedIn, navigate]);

  const handleLoginClick = async () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const auth = getAuth(app); 

    try {
      const userCredential = await signInWithEmailAndPassword(auth, id, password);
      const user = userCredential.user;
      console.log("로그인 성공:", user);
      setIsLoggedIn(true); 
      sessionStorage.setItem('isLoggedIn', 'true'); 
      navigate('/방문기록');
    } catch (error) {
      alert('제대로 입력해주세요');
      console.error('로그인 오류:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-sub-container">
        <h2 className="login-title">관리자 로그인</h2>
      </div>
      <span className='login-description'>로그인</span>
      <div className='login-form-container'>
        <div className='login-id'>아이디</div>
        <input 
          type='text' 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder="아이디를 입력하세요" 
        />
        <div className='login-pwd'>비밀번호</div>
        <input 
          type='password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="비밀번호를 입력하세요" 
        />
      </div>
      <button className='login' onClick={handleLoginClick}>로그인</button>
    </div>
  );
}

export default LoginPage;
