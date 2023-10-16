import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Login() {

  return (
    <div className="home-body">
      <div className="home-welcome">
        별 헤는 밤 관리자 페이지 입니다.
      </div>
      <div className="home-main">어서와!</div>

      <div className='move-page'>
        <Link to="/post">
          <Button >게시물 관리</Button>
        </Link>
      </div>

      <div className='move-page'>
        <Link to="notice">
          <Button >공지 관리</Button>
        </Link>
      </div>

    </div>
  );

}
