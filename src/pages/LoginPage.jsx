import React from 'react'
import "./styles/LoginPage.css";

function LoginPage() {
  return (
  <div className="login-container">
    <div className="login-sub-container">
      <h2 className="login-title">관리자 로그인</h2>
    </div>
    <span className='login-description'>로그인</span>
    <div className='login-form-container'>
      <div className='login-id'>아이디</div>
      <input type='text' />
      <div className='login-pwd'>비밀번호</div>
      <input type='text' />
    </div>
    <button className='login'>로그인</button>
  </div>
  )
}

export default LoginPage
