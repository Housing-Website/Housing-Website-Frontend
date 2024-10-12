import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./styles/LoginPage.css";

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    const adminId = 'vvip1526';
    const adminPassword = 'kn58jsgd!';

    if (id === adminId && password === adminPassword) {
      navigate('/방문기록'); 
    } else {
      alert('제대로 입력해주세요');
    }
  }; //ㅠㅠ 이쪽 db...로 넣어줘야 하는데.. 걍 하드코딩함 ㅠㅠ ㅈㅅ으진..

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
